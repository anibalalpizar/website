export function getProjectCategories(project: any): string {
  const categories = []

  // NPM packages
  if (project.url.includes("npmjs.com")) {
    categories.push("npm")
  }

  // APIs
  if (
    project.title.toLowerCase().includes("api") ||
    project.description.toLowerCase().includes("api")
  ) {
    categories.push("api")
  }

  // Tools
  if (
    project.description.toLowerCase().includes("tool") ||
    project.description.toLowerCase().includes("middleware") ||
    project.description.toLowerCase().includes("converter")
  ) {
    categories.push("tools")
  }

  // Web
  if (
    categories.length === 0 ||
    project.technologies.some((tech: any) =>
      ["Next.js", "React", "TailwindCSS"].includes(tech.name)
    )
  ) {
    categories.push("web")
  }

  return categories.join(",")
}
