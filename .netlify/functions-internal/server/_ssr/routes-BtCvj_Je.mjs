import { r as __toESM } from "../_runtime.mjs";
import { a as WHATSAPP, i as PHONE_TEL, n as PHONE_DISPLAY_FR, o as content, r as PHONE_DISPLAY_INTL, t as EMAIL } from "./content-C7eB-5lN.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Banknote, E as Activity, S as CalendarCheck, T as Award, _ as HeartHandshake, a as Siren, b as Clock, c as Plus, d as Menu, f as MapPin, g as HeartPulse, h as House, i as Stethoscope, l as Phone, m as Languages, n as TestTube, o as ShieldPlus, p as Mail, r as Syringe, s as ShieldCheck, t as X, u as MessageCircle, v as FileText, w as Bandage, x as CircleDot, y as Droplets } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BtCvj_Je.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LanguageContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "ha-lang";
function LanguageProvider({ children }) {
	const [lang, setLang] = (0, import_react.useState)("fr");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === "ar" || stored === "fr") setLang(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		const t = content[lang];
		document.documentElement.lang = t.htmlLang;
		document.documentElement.dir = t.dir;
		window.localStorage.setItem(STORAGE_KEY, lang);
	}, [lang]);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		setLang,
		toggle: () => setLang((l) => l === "fr" ? "ar" : "fr"),
		t: content[lang],
		rtl: lang === "ar"
	}), [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value,
		children
	});
}
function useLanguage() {
	const ctx = (0, import_react.useContext)(LanguageContext);
	if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
	return ctx;
}
var logo_hanane_alaoui_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%20role='img'%20aria-label='Hanane%20Alaoui%20logo'%3e%3cdefs%3e%3clinearGradient%20id='bg'%20x1='0'%20x2='1'%20y1='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='%23ebf9ff'%20/%3e%3cstop%20offset='100%25'%20stop-color='%23dff7ef'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='200'%20height='200'%20rx='42'%20fill='url(%23bg)'/%3e%3ccircle%20cx='100'%20cy='100'%20r='69'%20fill='%23eaf7ff'%20stroke='%232c7da0'%20stroke-width='5'/%3e%3cpath%20d='M84%2059h32v27h35v32h-35v35H84v-35H49V86h35V59z'%20fill='%232c7da0'%20opacity='0.9'/%3e%3cpath%20d='M100%2059h18v82h-18V59zm-41%2041h82v18H59v-18z'%20fill='%231f8d7a'%20opacity='0.9'/%3e%3cpath%20d='M63%20122c9-11%2022-18%2037-18s28%207%2037%2018'%20fill='none'%20stroke='%231f8d7a'%20stroke-width='8'%20stroke-linecap='round'%20opacity='0.85'/%3e%3ccircle%20cx='100'%20cy='100'%20r='6'%20fill='%231f8d7a'/%3e%3c/svg%3e";
var hero_soins_domicile_default = "/assets/hero-soins-domicile-rbNQitrR.jpg";
var whyIcons = [
	Award,
	CalendarCheck,
	Siren,
	House,
	ShieldCheck
];
var serviceIcons = [
	Syringe,
	Bandage,
	TestTube,
	Droplets,
	Stethoscope,
	HeartPulse,
	HeartHandshake,
	ShieldPlus,
	ShieldCheck,
	Activity,
	CircleDot,
	Plus
];
function CallButton({ label, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: PHONE_TEL,
		className: `inline-flex items-center justify-center gap-2 rounded-full bg-urgent px-6 py-3.5 text-base font-semibold text-urgent-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
			className: "size-5 shrink-0",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function WhatsAppButton({ label, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: WHATSAPP,
		target: "_blank",
		rel: "noopener noreferrer",
		className: `inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			className: "size-5 shrink-0",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function Header() {
	const { t, toggle, rtl } = useLanguage();
	const [open, setOpen] = (0, import_react.useState)(false);
	const links = [
		{
			href: "#services",
			label: t.nav.services
		},
		{
			href: "#zone",
			label: t.nav.zone
		},
		{
			href: "#apropos",
			label: t.nav.about
		},
		{
			href: "#tarifs",
			label: t.nav.pricing
		},
		{
			href: "#contact",
			label: t.nav.contact
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo_hanane_alaoui_default,
					alt: "",
					width: 48,
					height: 48,
					className: "size-11 shrink-0 rounded-full object-cover object-top"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate font-display text-base font-bold text-primary-deep sm:text-lg",
						children: t.brand
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-xs text-muted-foreground sm:text-sm",
						children: t.brandRole
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-primary-soft hover:text-primary-deep",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: toggle,
						className: "inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/30 px-3 py-2 text-sm font-semibold text-primary-deep transition hover:bg-primary-soft",
						"aria-label": rtl ? "Passer en français" : "التبديل إلى العربية",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {
							className: "size-4",
							"aria-hidden": true
						}), t.langLabel]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: PHONE_TEL,
						className: "hidden shrink-0 items-center gap-2 rounded-full bg-urgent px-4 py-2.5 text-sm font-semibold text-urgent-foreground transition hover:brightness-110 sm:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-4",
							"aria-hidden": true
						}), t.callNow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						className: "inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-primary-deep lg:hidden",
						"aria-label": "Menu",
						"aria-expanded": open,
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-background px-4 pb-4 lg:hidden",
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "block rounded-xl px-3 py-3 text-base font-medium text-foreground/85 hover:bg-primary-soft",
				children: l.label
			}, l.href))
		})]
	});
}
function Hero() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "soft-panel border-b border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-primary-deep",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
						className: "size-4",
						"aria-hidden": true
					}), t.hero.badge]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-3xl leading-tight font-bold text-primary-deep sm:text-4xl lg:text-5xl",
					children: t.hero.h1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg",
					children: t.hero.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, { label: t.hero.call }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, { label: t.hero.whatsapp })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-9 grid grid-cols-3 gap-3 border-t border-border/70 pt-6",
					children: t.hero.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-2xl font-bold text-primary sm:text-3xl",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-xs leading-snug text-muted-foreground sm:text-sm",
						children: s.label
					})] }, s.label))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_soins_domicile_default,
					alt: t.hero.imageAlt,
					width: 1280,
					height: 1600,
					className: "aspect-4/5 w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
				})
			})]
		})
	});
}
function SectionTitle({ title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl font-bold text-primary-deep sm:text-3xl",
			children: title
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-base text-muted-foreground",
			children: subtitle
		})]
	});
}
function Why() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-14 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				title: t.why.title,
				subtitle: t.why.subtitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: t.why.items.map((item, i) => {
					const Icon = whyIcons[i] ?? ShieldCheck;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-bold text-primary-deep",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: item.text
							})
						]
					}, item.title);
				})
			})]
		})
	});
}
function Services() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "scroll-mt-24 bg-primary-soft/50 py-14 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					title: t.services.title,
					subtitle: t.services.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: t.services.items.map((item, i) => {
						const Icon = serviceIcons[i] ?? Plus;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 pt-1.5 text-sm leading-snug font-medium text-foreground/90",
								children: item
							})]
						}, item);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-sm text-muted-foreground",
					children: t.services.note
				})
			]
		})
	});
}
function Zone() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "zone",
		className: "scroll-mt-24 bg-background py-14 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				title: t.zone.title,
				subtitle: t.zone.subtitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-foreground/80",
					children: t.zone.text
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex flex-wrap gap-2",
					children: t.zone.areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full border border-primary/25 bg-primary-soft px-3.5 py-1.5 text-sm font-medium text-primary-deep",
						children: a
					}, a))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "zone-visual relative mx-auto w-full max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "zone-orbit zone-orbit-1" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "zone-orbit zone-orbit-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "zone-orbit zone-orbit-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "zone-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "zone-core",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mx-auto size-6",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-display text-lg font-bold",
										children: t.zone.center
									})]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "zone-badge",
							children: t.zone.radius
						})
					]
				})]
			})]
		})
	});
}
function Availability() {
	const { t } = useLanguage();
	const icons = [
		CalendarCheck,
		Siren,
		Clock
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary-deep py-14 text-primary-foreground sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center font-display text-2xl font-bold sm:text-3xl",
					children: t.availability.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: t.availability.items.map((item, i) => {
						const Icon = icons[i] ?? Clock;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-2xl bg-primary-foreground/10 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-6",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-primary-foreground/85",
									children: item.text
								})
							]
						}, item.title);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, { label: t.hero.call }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, { label: t.hero.whatsapp })]
				})
			]
		})
	});
}
function About() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "apropos",
		className: "scroll-mt-24 bg-background py-14 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: t.about.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-5",
				children: t.about.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-foreground/80",
					children: p
				}, p.slice(0, 24)))
			})]
		})
	});
}
function Pricing() {
	const { t } = useLanguage();
	const cards = [
		{
			icon: Banknote,
			title: t.pricing.cash,
			text: t.pricing.cashText
		},
		{
			icon: ShieldCheck,
			title: t.pricing.noInsurance,
			text: t.pricing.noInsuranceText
		},
		{
			icon: FileText,
			title: t.pricing.quote,
			text: t.pricing.quoteText
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tarifs",
		className: "scroll-mt-24 bg-primary-soft/50 py-14 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: t.pricing.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
								className: "size-5",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-bold text-primary-deep",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: c.text
						})
					]
				}, c.title))
			})]
		})
	});
}
function Contact() {
	const { t } = useLanguage();
	const rows = [
		{
			icon: Phone,
			label: t.contact.phone,
			value: `${PHONE_DISPLAY_FR} (${PHONE_DISPLAY_INTL})`,
			href: PHONE_TEL
		},
		{
			icon: MessageCircle,
			label: t.contact.whatsapp,
			value: PHONE_DISPLAY_INTL,
			href: WHATSAPP
		},
		{
			icon: Mail,
			label: t.contact.email,
			value: EMAIL,
			href: `mailto:${EMAIL}`
		},
		{
			icon: MapPin,
			label: t.contact.zone,
			value: t.contact.zoneValue
		},
		{
			icon: Clock,
			label: t.contact.availability,
			value: t.contact.availabilityValue
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-24 bg-background py-14 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					title: t.contact.title,
					subtitle: t.contact.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]",
					children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: r.href,
						target: r.href.startsWith("http") ? "_blank" : void 0,
						rel: "noopener noreferrer",
						className: "flex items-center gap-4 p-4 transition hover:bg-primary-soft/60 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, {
							className: "size-5 shrink-0 text-primary",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted-foreground",
								children: r.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate font-semibold text-primary-deep",
								children: r.value
							})]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 p-4 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, {
							className: "size-5 shrink-0 text-primary",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted-foreground",
								children: r.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold text-primary-deep",
								children: r.value
							})]
						})]
					}) }, r.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, { label: t.hero.call }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, { label: t.hero.whatsapp })]
				})
			]
		})
	});
}
function Footer() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-primary-soft/60 pb-28 lg:pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-10 text-center sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo_hanane_alaoui_default,
					alt: "",
					width: 56,
					height: 56,
					className: "mx-auto size-14 rounded-full object-cover object-top"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-display font-bold text-primary-deep",
					children: t.footer.rights
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t.footer.disclaimer
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: [
						PHONE_DISPLAY_INTL,
						" · ",
						EMAIL
					]
				})
			]
		})
	});
}
function MobileBar() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
			label: t.callNow,
			className: "w-full px-3 py-3 text-sm"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
			label: t.whatsapp,
			className: "w-full px-3 py-3 text-sm"
		})]
	});
}
function Page() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: t.dir,
		lang: t.htmlLang,
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zone, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Availability, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBar, {})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {}) });
//#endregion
export { SplitComponent as component };
