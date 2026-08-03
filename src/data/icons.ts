// Tech-stack → brand icon map (simple-icons SVG path + brand hex).
// Add an entry here to give a skill/tag a logo; anything missing falls
// back to a small generic glyph in the UI. All icons are inlined as SVG
// at build time — zero external requests.
import {
  siTypescript,
  siJavascript,
  siOpenjdk,
  siGo,
  siPython,
  siCplusplus,
  siNodedotjs,
  siSpringboot,
  siNestjs,
  siExpress,
  siFastapi,
  siGin,
  siReact,
  siNextdotjs,
  siRedux,
  siDocker,
  siKubernetes,
  siTerraform,
  siApachekafka,
  siPostgresql,
  siMysql,
  siMongodb,
  siFirebase,
  siGit,
  siPostman,
  siElectron,
  siJenkins,
  siSupabase,
  siGithub,
} from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

interface StackIcon {
  path: string;
  hex: string;
}

export const stackIcons: Record<string, StackIcon> = {
  typescript: pick(siTypescript),
  javascript: pick(siJavascript),
  java: pick(siOpenjdk),
  go: pick(siGo),
  golang: pick(siGo),
  python: pick(siPython),
  'c++': pick(siCplusplus),
  cpp: pick(siCplusplus),
  'node.js': pick(siNodedotjs),
  node: pick(siNodedotjs),
  'spring boot': pick(siSpringboot),
  springboot: pick(siSpringboot),
  nestjs: pick(siNestjs),
  'express.js': pick(siExpress),
  express: pick(siExpress),
  fastapi: pick(siFastapi),
  gin: pick(siGin),
  react: pick(siReact),
  'next.js': pick(siNextdotjs),
  nextjs: pick(siNextdotjs),
  redux: pick(siRedux),
  docker: pick(siDocker),
  kubernetes: pick(siKubernetes),
  k8s: pick(siKubernetes),
  terraform: pick(siTerraform),
  kafka: pick(siApachekafka),
  postgresql: pick(siPostgresql),
  postgres: pick(siPostgresql),
  mysql: pick(siMysql),
  mongodb: pick(siMongodb),
  mongo: pick(siMongodb),
  firebase: pick(siFirebase),
  git: pick(siGit),
  postman: pick(siPostman),
  electron: pick(siElectron),
  jenkins: pick(siJenkins),
  supabase: pick(siSupabase),
  github: pick(siGithub),
};

function pick(icon: SimpleIcon): StackIcon {
  return { path: icon.path, hex: icon.hex };
}

/** Look up the brand icon for a tech name, or undefined if none is mapped. */
export function stackIcon(name: string): StackIcon | undefined {
  return stackIcons[name.toLowerCase().trim()];
}
