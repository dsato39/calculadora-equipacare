import { getFormDataByClientId } from "./calculation.service.js";

export const handleCalculation = async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const formData = await getFormDataByClientId(id_cliente);

    if (!formData) {
      return res
        .status(404)
        .json({ success: false, message: "Dados não encontrados" });
    }

    const {
      quant_salas_cirurgicas,
      cirurgias_sala_dia,
      tecidos,
      quant_dias_semana,
      intervalo_pico,
      quant_leitos_uti,
      quant_leitos_internacao,
      quant_leitos_rpa,
      quant_leitos_observacoes,
      quant_leitos_hospdia,
    } = formData;

    // Realizar cálculos
    const result =
      (quant_salas_cirurgicas + cirurgias_sala_dia) *
      (tecidos === 1 ? 1.5 : 1.0);

    // Retornar o resultado dos cálculos
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
