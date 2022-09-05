import { object, string } from "yup";

export const createUserSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          name: string()
            .required("Nome é obrigatório")
            .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "São aceitos somente letras"),
          email: string()
            .required("Email é obrigatório")
            .email("Email é inválido"),
          password: string().required("Senha é obrigatório"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export const updateUserSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          name: string().matches(
            /[a-zA-Z\u00C0-\u00FF ]+/i,
            "São aceitos somente letras"
          ),
          email: string().email("Email é inválido"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export const recoveryPasswordSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          email: string()
            .required("Email é obrigatório")
            .email("Email é inválido"),
          currentPassword: string().required("Senha é obrigatório"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export const updatePasswordSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          newPassword: string().required("Senha é obrigatório"),
          currentPassword: string().required("Senha é obrigatório"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};
