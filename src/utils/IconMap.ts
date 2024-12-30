import {
  TypeScriptIcon,
  NextJSIcon,
  TailwindCSSIcon,
  ShadcnUIIcon,
  NestJSIcon,
  MapIcon,
  XmlIcon,
  LandingIcon,
  NPMIcon,
  NodeJSIcon,
  MongoDBIcon,
  ReactIcon
} from "../icons"

export const ICON_MAP = {
  TypeScript: TypeScriptIcon,
  NextJS: NextJSIcon,
  TailwindCSS: TailwindCSSIcon,
  ShadcnUI: ShadcnUIIcon,
  NestJS: NestJSIcon,
  Map: MapIcon,
  XML: XmlIcon,
  Landing: LandingIcon,
  NPM: NPMIcon,
  NodeJS: NodeJSIcon,
  MongoDB: MongoDBIcon,
  React: ReactIcon
} as const

export type IconName = keyof typeof ICON_MAP
