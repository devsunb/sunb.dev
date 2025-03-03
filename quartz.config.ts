import type { QuartzConfig } from "./quartz/cfg";
import * as Plugin from "./quartz/plugins";

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
	configuration: {
		pageTitle: "선비의 지식곳간",
		pageTitleSuffix: "",
		enableSPA: true,
		enablePopovers: true,
		analytics: { provider: "clarity", projectId: "qiijuxnd35" },
		locale: "ko-KR",
		baseUrl: "sunb.dev",
		ignorePatterns: ["private", "templates", ".obsidian"],
		defaultDateType: "modified",
		generateSocialImages: true,
		theme: {
			fontOrigin: "googleFonts",
			cdnCaching: true,
			typography: {
				header: "Noto Sans KR",
				body: "Noto Sans KR",
				code: "Nanum Gothic Coding",
			},
			colors: {
				lightMode: {
					light: "#fbf1c7",
					lightgray: "#e5d5ad",
					gray: "#a89984",
					darkgray: "#45403d",
					dark: "#282828",
					secondary: "#45707a",
					tertiary: "#4c7a5d",
					highlight: "rgba(143, 159, 169, 0.15)",
					textHighlight: "#fff23688",
				},
				darkMode: {
					light: "#1b1b1b",
					lightgray: "#3c3836",
					gray: "#7c6f64",
					darkgray: "#d4be98",
					dark: "#e5d5ad",
					secondary: "#7daea3",
					tertiary: "#89b482",
					highlight: "rgba(143, 159, 169, 0.15)",
					textHighlight: "#b3aa0288",
				},
			},
		},
	},
	plugins: {
		transformers: [
			Plugin.FrontMatter(),
			Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
			Plugin.SyntaxHighlighting({
				theme: { light: "github-light", dark: "github-dark" },
				keepBackground: false,
			}),
			Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
			Plugin.GitHubFlavoredMarkdown(),
			Plugin.TableOfContents(),
			Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
			Plugin.Description(),
			Plugin.Latex({ renderEngine: "katex" }),
		],
		filters: [Plugin.RemoveDrafts()],
		emitters: [
			Plugin.AliasRedirects(),
			Plugin.ComponentResources(),
			Plugin.ContentPage(),
			Plugin.FolderPage(),
			Plugin.TagPage(),
			Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
			Plugin.Assets(),
			Plugin.Static(),
			Plugin.NotFoundPage(),
		],
	},
};

export default config;
