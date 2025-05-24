// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import SidebarImages from './src/components/SidebarImages.astro';

// Determine deployment target (default to Vercel)
const isVercel = !!process.env.VERCEL;
const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';
// https://astro.build/config
export default defineConfig({
	 // Dynamic site URL (GitHub Pages vs. Vercel)
  site: isGitHubPages 
    ? 'https://Fsquared123.github.io' 
    : 'https://vue-js-docs.vercel.app', // Replace with your Vercel URL

  // Dynamic base path (GitHub Pages requires /repo-name/)
  base: isGitHubPages ? '/NewVueJS' : '/',

  // Required for GitHub Pages (static output)
  output: 'static',

	integrations: [
		starlight({
			title: 'Licia VueJS',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],
			favicon: new URL('./src/assets/favicon.ico', import.meta.url).href,
			logo: {
				light: './src/assets/vuejs-logo.webp',
    			dark: './src/assets/vuejs-light.webp',
				replacesTitle: true,
			},
			components: {
				Sidebar: './src/components/SidebarImages.astro'
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Fsquared123' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/felicia-franklin-njoku/' }
				
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'guides/introduction' },
						{ label: 'Quick Start', slug: 'guides/quickstart' },
					],
				},
				{label: 'Essentials',
					items: [
						{label: 'Creating an Application', slug: 'essentials/createapplication'},
						{label: 'Template Syntax', slug: 'essentials/templatesyntax'},
						{label: 'Class And Style Bindings', slug: 'essentials/classandstyle'},
						{label: 'Conditional Rendering', slug: 'essentials/conditionalrendering'},
						{label: 'Lifecycle Hooks', slug: 'essentials/lifecyclehooks'},
					]
				},
				{label: 'Components In-Depth',
					items: [
						{label: 'Registration', slug: 'componentsindepth/registration'},
						{label: 'Props', slug: 'componentsindepth/props'},
						{label: 'Events', slug: 'componentsindepth/events'},
						{label: 'Components v-model', slug: 'componentsindepth/componentsv'},
						{label: 'Async Components', slug: 'componentsindepth/asynccomponents'},
					]
				},
				{label: 'Reusability',
					items: [
						{label: 'Composables', slug: 'reusability/composables'},
						{label: 'Custom Directives', slug: 'reusability/customdirectives'},
						{label: 'Plugins', slug: 'reusability/plugins'},
					]
				},
				{label: 'Built-in Components',
					items: [
						{label: 'Transition', slug: 'builtincomponents/transition'},
						{label: 'Transition Group', slug: 'builtincomponents/transitiongroup'},
						{label: 'Keep Alive', slug: 'builtincomponents/keepalive'},
						{label: 'Teleport', slug: 'builtincomponents/teleport'},
						{label: 'Suspense', slug: 'builtincomponents/suspense'},
					]
				},
				{label: 'Scaling Up',
					items: [
						{label: 'Single File Components', slug: 'scalingup/singlefile'},
						{label: 'Tooling', slug: 'scalingup/tooling'},
						{label: 'Routing', slug: 'scalingup/routing'},
						{label: 'State Management', slug: 'scalingup/statemanagement'},
						{label: 'Testing', slug: 'scalingup/testing'},
					]
				},
				{label: 'Best Practices',
					items: [
						{label: 'Production Deployment', slug: 'bestpractices/proddeployment'},
						{label: 'Performance', slug: 'bestpractices/performance'},
						{label: 'Accessibility', slug: 'bestpractices/accessibility'},
						{label: 'Security', slug: 'bestpractices/security'},
						
					]
				},
				{label: 'TypeScript',
					items: [
						{label: 'Overview', slug: 'typescript/overview'},
						{label: 'TS with Composition API', slug: 'typescript/compositionapi'},
						{label: 'TS with Option API', slug: 'typescript/optionapi'},
					]
				},
				{label: 'Extra Topics',
					items: [
						{label: 'Ways of Using Vue', slug: 'extratopics/usingvue'},
						{label: 'Composition API FAQ', slug: 'extratopics/compositionapifaq'},
						{label: 'Reactivity in Depth', slug: 'extratopics/reactivitydepth'},
						{label: 'Rendering Mechanism', slug: 'extratopics/renderingmechanism'},
						{label: 'Vue and Web Components', slug: 'extratopics/vueandweb'},
					]
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
} 
)
;



