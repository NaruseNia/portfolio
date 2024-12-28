import {z} from "zod";

const getEnv = () => {
  return typeof process !== 'undefined' ? process.env as unknown as Env : args.context.cloudflare.env as Env;
}

const envVars = z.object({
  NEWT_SPACE_UID: z.string(),
  NEWT_CDN_API_TOKEN: z.string(),
  NEWT_APP_UID: z.string(),
  NEWT_MODEL_UID: z.string(),
});

envVars.parse(getEnv());

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {};
  }
}

