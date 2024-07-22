import { findByDimensionId } from "../dimensions/dimensions.service.js";
import { saveVolumeCalculation } from "./volume_calculation.service.js";

export const handleVolumeCalculation = async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const formData = await findByDimensionId(id_cliente);

    if (!formData) {
      return res
        .status(404)
        .json({ success: false, message: "Dados não encontrados" });
    }

    const {
      quant_salas_cirurgicas,
      quant_cirurgia_sala_dia,
      tecidos,
      quant_dias_semana,
      interv_pico,
      leitos_uti,
      leitos_internacao,
      leitos_rpa,
      leitos_observacao,
      leitos_hospdia,
    } = formData;

    // Realizar cálculos
    const volume_cirurgias =
      quant_salas_cirurgicas *
      quant_cirurgia_sala_dia *
      (tecidos === 1 ? 1.5 : 1.0);
    const volume_uti = leitos_uti * 0.5;
    const volume_outros =
      (leitos_internacao + leitos_rpa + leitos_observacao + leitos_hospdia) *
      0.05;
    let volume_total_diario = volume_cirurgias + volume_uti + volume_outros;

    // Condição para dobrar o volume_total_diario se tecidos for 1
    if (tecidos === 1) {
      volume_total_diario *= 2;
    }

    // Dados a serem salvos no banco de dados
    const calculationData = {
      id_cliente,
      volume_cirurgias,
      volume_uti,
      volume_outros,
      volume_total_diario,
    };

    // Salvar os cálculos no banco de dados
    const savedCalculation = await saveVolumeCalculation(calculationData);

    // Retornar o resultado dos cálculos
    res.status(200).json({ success: true, result: savedCalculation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
