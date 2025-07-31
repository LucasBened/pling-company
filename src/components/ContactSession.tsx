import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import logo from "../assets/logo.svg";

import { Button } from "./ui/button";

const Logo = () => (
  <img src={logo} alt="Pling Company Logo" className="w-20 h-auto" />
);

const portalId = import.meta.env.VITE_PORTAL_ID;
const formId = import.meta.env.VITE_FORM_ID;

const formSchema = z.object({
  firstname: z.string().min(2, "O nome é obrigatório."),
  phone: z.string().min(10, "O número de telefone é obrigatório."),
  email: z.string().email("Por favor, insira um e-mail válido."),
  name: z.string().min(2, "O nome da empresa é obrigatório."),
  segmento_ou_ramo_de_atuacao: z.string().min(3, "O segmento é obrigatório."),
  o_que_voce_precisa_: z.string().min(1, "Por favor, selecione uma opção."),
  voce_ja_anuncia_atualmente_: z
    .string()
    .min(1, "Por favor, selecione uma opção."),
  qual_o_seu_orcamento_mensal_para_anuncios_: z
    .string()
    .min(1, "Por favor, selecione uma opção."),
  deixe_uma_mensagem___opcional_: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSession = () => {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmissionStatus("idle");

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const fields = Object.entries(data).map(([name, value]) => ({
      name,
      value,
    }));

    const payload = {
      fields,
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        reset();
      } else {
        setSubmissionStatus("error");
        const errorData = await response.json();
        console.error("Erro retornado pela API HubSpot:", errorData);
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Erro de rede ou ao enviar formulário:", error);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="w-full relative flex flex-col items-center justify-center gap-12 py-16 lg:py-24 bg-[#E3F3E6] rounded-3xl overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div
        className="absolute inset-0 w-full h-full bg-repeat opacity-[0.03]"
        style={{ backgroundImage: "url(/src/assets/images/pattern.png)" }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-16 lg:gap-8 px-4 sm:px-8 md:px-12">
        <motion.div
          className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
          variants={fadeInUp}
        >
          <Logo />
          <h2 className="font-black text-4xl sm:text-5xl text-smooth-black leading-tight">
            Troque a incerteza por resultados concretos.
          </h2>
          <p className="text-base sm:text-lg font-light text-smooth-black">
            Agende uma conversa direta com nossa equipe. Analisaremos seus
            desafios e apresentaremos um plano estratégico para transformar seu
            tráfego pago em um motor de crescimento real.
          </p>
        </motion.div>
        <motion.div className="w-full lg:w-6/12" variants={fadeInUp}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-4 bg-white p-8 rounded-2xl border border-[#1E1E1E] shadow-[0px_6px_0px_0px_#1E1E1E]"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome*
                </label>
                <input
                  type="text"
                  id="firstname"
                  {...register("firstname")}
                  className="w-full p-3 border border-[#1E1E1E] rounded-xl shadow-[0px_3px_0px_0px_#1E1E1E] focus:ring-[#C0E6C4] focus:border-[#C0E6C4] transition"
                />
                {errors.firstname && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Número de telefone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full p-3 border border-[#1E1E1E] rounded-xl shadow-[0px_3px_0px_0px_#1E1E1E] focus:ring-[#C0E6C4] focus:border-[#C0E6C4] transition"
                />
                {errors.phone && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                E-mail*
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full p-3 border border-[#1E1E1E] rounded-xl shadow-[0px_3px_0px_0px_#1E1E1E] focus:ring-[#C0E6C4] focus:border-[#C0E6C4] transition"
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome da empresa*
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full p-3 border border-[#1E1E1E] rounded-xl shadow-[0px_3px_0px_0px_#1E1E1E] focus:ring-[#C0E6C4] focus:border-[#C0E6C4] transition"
                />
                {errors.name && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="segmento_ou_ramo_de_atuacao"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Segmento ou ramo de atuação*
                </label>
                <input
                  type="text"
                  id="segmento_ou_ramo_de_atuacao"
                  {...register("segmento_ou_ramo_de_atuacao")}
                  className="w-full p-3 border border-[#1E1E1E] rounded-xl shadow-[0px_3px_0px_0px_#1E1E1E] focus:ring-[#C0E6C4] focus:border-[#C0E6C4] transition"
                />
                {errors.segmento_ou_ramo_de_atuacao && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.segmento_ou_ramo_de_atuacao.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="o_que_voce_precisa_"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  O que você precisa?*
                </label>
                <select
                  id="o_que_voce_precisa_"
                  {...register("o_que_voce_precisa_")}
                  className="w-full p-3 border border-[#1E1E1E] rounded-xl shadow-[0px_3px_0px_0px_#1E1E1E] focus:ring-[#C0E6C4] focus:border-[#C0E6C4] transition bg-white"
                >
                  <option value="">Selecione</option>
                  <option value="Trafego_Pago">Tráfego Pago</option>
                  <option value="SEO">SEO</option>
                  <option value="Website">Website</option>
                </select>
                {errors.o_que_voce_precisa_ && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.o_que_voce_precisa_.message}
                  </p>
                )}
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="voce_ja_anuncia_atualmente_"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Você já anuncia atualmente?*
                </label>
                <select
                  id="voce_ja_anuncia_atualmente_"
                  {...register("voce_ja_anuncia_atualmente_")}
                  className="w-full p-3 border border-[#1E1E1E] rounded-xl shadow-[0px_3px_0px_0px_#1E1E1E] focus:ring-[#C0E6C4] focus:border-[#C0E6C4] transition bg-white"
                >
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Nao">Não</option>
                </select>
                {errors.voce_ja_anuncia_atualmente_ && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.voce_ja_anuncia_atualmente_.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="qual_o_seu_orcamento_mensal_para_anuncios_"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Qual o seu orçamento mensal para anúncios?*
              </label>
              <select
                id="qual_o_seu_orcamento_mensal_para_anuncios_"
                {...register("qual_o_seu_orcamento_mensal_para_anuncios_")}
                className="w-full p-3 border border-[#1E1E1E] rounded-xl shadow-[0px_3px_0px_0px_#1E1E1E] focus:ring-[#C0E6C4] focus:border-[#C0E6C4] transition bg-white"
              >
                <option value="">Selecione</option>
                <option value="Ate_1500">Até R$1.500</option>
                <option value="Entre_1500_e_3000">
                  Entre R$1.500 e R$3.000
                </option>
                <option value="Acima_de_3000">Acima de R$3.000</option>
              </select>
              {errors.qual_o_seu_orcamento_mensal_para_anuncios_ && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.qual_o_seu_orcamento_mensal_para_anuncios_.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="deixe_uma_mensagem___opcional_"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Deixe uma mensagem (opcional)
              </label>
              <textarea
                id="deixe_uma_mensagem___opcional_"
                {...register("deixe_uma_mensagem___opcional_")}
                rows={4}
                className="w-full p-3 border border-[#1E1E1E] rounded-xl shadow-[0px_3px_0px_0px_#1E1E1E] focus:ring-[#C0E6C4] focus:border-[#C0E6C4] transition"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="bg-[#C0E6C4] text-smooth-black border  rounded-2xl font-bold text-base py-4 px-8
                       shadow-[0px_4px_0px_0px_#1E1E1E] hover:shadow-[0px_6px_0px_0px_#1E1E1E]
                       hover:bg-[#b1dcb4] hover:-translate-y-0.5
                       active:shadow-[0px_2px_0px_0px_#1E1E1E] active:translate-y-0.5
                       transition-all duration-200 ease-out w-full "
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>

            {submissionStatus === "success" && (
              <p className="text-center text-green-600 mt-4">
                Obrigado! Sua mensagem foi enviada com sucesso.
              </p>
            )}
            {submissionStatus === "error" && (
              <p className="text-center text-red-600 mt-4">
                Ocorreu um erro no envio. Por favor, tente novamente mais tarde.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSession;
