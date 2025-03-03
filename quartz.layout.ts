import type { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
	head: Component.Head(),
	header: [],
	afterBody: [
		Component.Comments({
			provider: "giscus",
			options: {
				repo: "devsunb/devsunb.github.io",
				repoId: "R_kgDON_WTZQ",
				category: "Announcements",
				categoryId: "DIC_kwDON_WTZc4CnUi0",
				lightTheme: "gruvbox_light",
				darkTheme: "gruvbox_dark",
				themeUrl: "https://giscus.app/themes",
			},
		}),
	],
	footer: Component.Footer({
		links: { GitHub: "https://github.com/devsunb/devsunb.github.io" },
	}),
};

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
	beforeBody: [
		Component.Breadcrumbs(),
		Component.ContentMeta(),
		Component.TagList(),
	],
	left: [
		Component.PageTitle(),
		Component.MobileOnly(Component.Spacer()),
		Component.Search(),
		Component.Darkmode(),
		Component.Explorer(),
	],
	right: [
		Component.Graph(),
		Component.DesktopOnly(Component.TableOfContents()),
		Component.Backlinks(),
	],
};

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
	beforeBody: [Component.Breadcrumbs(), Component.ContentMeta()],
	left: [
		Component.PageTitle(),
		Component.MobileOnly(Component.Spacer()),
		Component.Search(),
		Component.Darkmode(),
		Component.Explorer(),
	],
	right: [],
};
