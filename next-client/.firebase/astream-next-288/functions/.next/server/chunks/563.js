exports.id = 563;
exports.ids = [563];
exports.modules = {

/***/ 9675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
'd2900379b58859ca3e2c76bdf35af21e9e177b3e': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2021)).then(mod => mod["getRecentAnime"]),
'632f1550cde791ac75b790c75f59d980bbdbc032': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2021)).then(mod => mod["getAnimeDetail"]),
'5c8afa5ece9f23e816cfa020b8f37ab02d8e8aeb': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2021)).then(mod => mod["getAnimeStream"]),
'da4b7c383987124e317147d3eae3634a24fab772': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2021)).then(mod => mod["getTopAiring"]),
}

async function endpoint(id, ...args) {
  const action = await actions[id]()
  return action.apply(null, args)
}

// Using CJS to avoid this to be tree-shaken away due to unused exports.
module.exports = {
  'd2900379b58859ca3e2c76bdf35af21e9e177b3e': endpoint.bind(null, 'd2900379b58859ca3e2c76bdf35af21e9e177b3e'),
  '632f1550cde791ac75b790c75f59d980bbdbc032': endpoint.bind(null, '632f1550cde791ac75b790c75f59d980bbdbc032'),
  '5c8afa5ece9f23e816cfa020b8f37ab02d8e8aeb': endpoint.bind(null, '5c8afa5ece9f23e816cfa020b8f37ab02d8e8aeb'),
  'da4b7c383987124e317147d3eae3634a24fab772': endpoint.bind(null, 'da4b7c383987124e317147d3eae3634a24fab772'),
}


/***/ }),

/***/ 4678:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 222));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 495));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9204));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9618))

/***/ }),

/***/ 1281:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 222));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 495));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9204));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9618))

/***/ }),

/***/ 222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BaseCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Navbar.tsx
var Navbar = __webpack_require__(495);
;// CONCATENATED MODULE: ./src/components/ButtonCTA.tsx

function ButtonCTA({ title , actions , shadow  }) {
    switch(shadow){
        case "small":
            shadow = "shadow-sm";
            break;
        case "medium":
            shadow = "shadow-md";
            break;
        case "large":
            shadow = "shadow-lg";
            break;
        case "extra":
            shadow = "shadow-xl";
            break;
        default:
            shadow = "shadow-none";
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: actions,
        className: "btn btn-accent btn-outline rounded-sm " + shadow,
        children: title
    });
}

// EXTERNAL MODULE: ./src/components/CarouselBase.tsx
var CarouselBase = __webpack_require__(9618);
;// CONCATENATED MODULE: ./src/components/HeroesBase.tsx

function HeroBase() {
    return /*#__PURE__*/ _jsx("div", {
        children: "Base Hero"
    });
}

;// CONCATENATED MODULE: ./src/components/FooterBase.tsx

function FooterBase() {
    return /*#__PURE__*/ _jsxs("footer", {
        className: "footer footer-center p-10 bg-primary text-primary-content",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx("svg", {
                        width: "50",
                        height: "50",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: "inline-block fill-current",
                        children: /*#__PURE__*/ _jsx("path", {
                            d: "M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
                        })
                    }),
                    /*#__PURE__*/ _jsxs("p", {
                        className: "font-bold",
                        children: [
                            "Astream Prjkt. ",
                            /*#__PURE__*/ _jsx("br", {}),
                            "Anime Streaming web site with next.js"
                        ]
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: "Copyright \xa9 2023 - All right reserved"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "grid grid-flow-col gap-4",
                    children: [
                        /*#__PURE__*/ _jsx("a", {
                            children: /*#__PURE__*/ _jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                className: "fill-current",
                                children: /*#__PURE__*/ _jsx("path", {
                                    d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("a", {
                            children: /*#__PURE__*/ _jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                className: "fill-current",
                                children: /*#__PURE__*/ _jsx("path", {
                                    d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("a", {
                            children: /*#__PURE__*/ _jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                className: "fill-current",
                                children: /*#__PURE__*/ _jsx("path", {
                                    d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/BaseLoading.tsx
var BaseLoading = __webpack_require__(9204);
;// CONCATENATED MODULE: ./src/components/index.ts








// EXTERNAL MODULE: ./src/helpers/index.ts
var helpers = __webpack_require__(939);
;// CONCATENATED MODULE: ./src/components/BaseCard.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function BaseCard({ anime  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card border-[3px] shadow-md shadow-primary-focus rounded-sm border-primary items-stretch justify-center bg-base-200 align-middle text-base-content",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/details/${anime.id}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "object-fill h-[60vh] w-auto",
                        src: anime.image,
                        alt: "Shoes"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body items-center text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap max-w-xs",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "card-title",
                            children: (0,helpers/* parseTitle */.D)(anime)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            "Episode Number : ",
                            anime.episodeNumber
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "card-actions",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/stream/${anime.episodeId}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonCTA, {
                                title: "Watch Episode",
                                shadow: "small"
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadingPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function LoadingPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex w-screen h-screen items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex absolute w-screen h-screen z-10 opacity-20 blur-3xl bg-white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "z-20 flex flex-row btn btn-outline gap-2",
                disabled: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-accent motion-reduce:animate-[spin_1.5s_linear_infinite]",
                        role: "status",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
                            children: "Loading..."
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        className: "text-accent align-middle text-center",
                        children: "Loading..."
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AniCarousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4790);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(343);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(939);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function AniCarousel({ animes  }) {
    let opts = {
        slidesPerView: 1,
        pagination: true
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__/* .Swiper */ .tq, {
        modules: [
            swiper__WEBPACK_IMPORTED_MODULE_2__/* .EffectFlip */ .VP
        ],
        effect: "flip",
        ...opts,
        children: animes.map((anime)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__/* .SwiperSlide */ .o5, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "sm:w-[30vw] w-screen h-fit",
                        src: anime.image,
                        alt: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .parseTitle */ .D)(anime)
                    })
                })
            }, anime.id))
    });
}


/***/ }),

/***/ 495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Navbar() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "navbar bg-primary text-primary-content",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn btn-square btn-ghost rounded-sm",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        className: "inline-block w-5 h-5 stroke-current",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M4 6h16M4 12h16M4 18h16"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    className: "btn  rounded-sm btn-ghost normal-case text-xl",
                    children: "Astream"
                })
            })
        ]
    });
}


/***/ }),

/***/ 939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ parseTitle)
/* harmony export */ });
const parseTitle = (anime)=>{
    let title = anime.title;
    if (!title) {
        title = anime.id.split("-").map((el)=>{
            if (el.match(/(no|ni|to|wa|wo|ga|mo)/i)) {
                return el;
            }
            return el.charAt(0).toUpperCase() + el.slice(1);
        }).join(" ");
    }
    return title.toString();
};


/***/ }),

/***/ 2021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnimeDetail": () => (/* binding */ getAnimeDetail),
/* harmony export */   "getAnimeStream": () => (/* binding */ getAnimeStream),
/* harmony export */   "getRecentAnime": () => (/* binding */ getRecentAnime),
/* harmony export */   "getTopAiring": () => (/* binding */ getTopAiring)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2855);
/* harmony import */ var _consumet_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(961);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1049);
/* __next_internal_action_entry_do_not_use__ getRecentAnime,getAnimeDetail,getAnimeStream,getTopAiring */ 

const animeProvider = new _consumet_extensions__WEBPACK_IMPORTED_MODULE_1__/* .ANIME.Gogoanime */ .LY.Gogoanime();
const getRecentAnime = async (page = 1, type)=>{
    try {
        let opts = [
            page,
            type
        ];
        let animes = await animeProvider.fetchRecentEpisodes(...opts);
        return animes.results;
    } catch (err) {
        throw err;
    }
};
const getAnimeDetail = async (id)=>{
    try {
        if (!id) {
            throw new Error("Anime ID is not provided");
        }
        let animeInfo = await animeProvider.fetchAnimeInfo(id);
        return animeInfo;
    } catch (err) {
        throw err;
    }
};
const getAnimeStream = async (episodeId)=>{
    try {
        if (!episodeId) {
            throw new Error("Episode ID is not provided");
        }
        let streamLinks = await animeProvider.fetchEpisodeServers(episodeId);
        return streamLinks;
    } catch (err) {
        throw err;
    }
};
const getTopAiring = async (page = 1, type)=>{
    try {
        let opts = [
            page,
            type
        ];
        let animes = await animeProvider.fetchTopAiring(...opts);
        return animes.results;
    } catch (err) {
        throw err;
    }
};

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
    getRecentAnime,
    getAnimeDetail,
    getAnimeStream,
    getTopAiring
]);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("d2900379b58859ca3e2c76bdf35af21e9e177b3e", null, getRecentAnime);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("632f1550cde791ac75b790c75f59d980bbdbc032", null, getAnimeDetail);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("5c8afa5ece9f23e816cfa020b8f37ab02d8e8aeb", null, getAnimeStream);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("da4b7c383987124e317147d3eae3634a24fab772", null, getTopAiring);


/***/ }),

/***/ 4180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "metadata": () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7617);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1358);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5553);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5962);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_effect_flip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
/* harmony import */ var swiper_css_effect_flip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_flip__WEBPACK_IMPORTED_MODULE_4__);




 // core Swiper

const metadata = {
    title: "Astream@next",
    description: "AnimeStream App"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
            className: `${(next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5___default().className)} text-accent`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Navbar */ .wp, {}),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .$_, {})
            ]
        })
    });
}


/***/ }),

/***/ 6624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1358);


function MainLoading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Loading */ .gb, {});
}


/***/ }),

/***/ 1358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "jJ": () => (/* reexport */ BaseCard),
  "Wb": () => (/* reexport */ CarouselBase),
  "$_": () => (/* reexport */ FooterBase),
  "gb": () => (/* reexport */ BaseLoading),
  "wp": () => (/* reexport */ Navbar)
});

// UNUSED EXPORTS: AniHero, MainButton

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/jcx/projectJ/astream-js/next-client/src/components/Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const Navbar = (proxy.default);

;// CONCATENATED MODULE: ./src/components/BaseCard.tsx

const BaseCard_proxy = (0,module_proxy.createProxy)(String.raw`/home/jcx/projectJ/astream-js/next-client/src/components/BaseCard.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: BaseCard_esModule, $$typeof: BaseCard_$$typeof } = BaseCard_proxy;
/* harmony default export */ const BaseCard = (BaseCard_proxy.default);

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
;// CONCATENATED MODULE: ./src/components/ButtonCTA.tsx

function ButtonCTA({ title , actions , shadow  }) {
    switch(shadow){
        case "small":
            shadow = "shadow-sm";
            break;
        case "medium":
            shadow = "shadow-md";
            break;
        case "large":
            shadow = "shadow-lg";
            break;
        case "extra":
            shadow = "shadow-xl";
            break;
        default:
            shadow = "shadow-none";
    }
    return /*#__PURE__*/ _jsx("button", {
        onClick: actions,
        className: "btn btn-accent btn-outline rounded-sm " + shadow,
        children: title
    });
}

;// CONCATENATED MODULE: ./src/components/CarouselBase.tsx

const CarouselBase_proxy = (0,module_proxy.createProxy)(String.raw`/home/jcx/projectJ/astream-js/next-client/src/components/CarouselBase.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: CarouselBase_esModule, $$typeof: CarouselBase_$$typeof } = CarouselBase_proxy;
/* harmony default export */ const CarouselBase = (CarouselBase_proxy.default);

;// CONCATENATED MODULE: ./src/components/HeroesBase.tsx

function HeroBase() {
    return /*#__PURE__*/ _jsx("div", {
        children: "Base Hero"
    });
}

;// CONCATENATED MODULE: ./src/components/FooterBase.tsx

function FooterBase() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer footer-center p-10 bg-primary text-primary-content",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "50",
                        height: "50",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: "inline-block fill-current",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "font-bold",
                        children: [
                            "Astream Prjkt. ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "Anime Streaming web site with next.js"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Copyright \xa9 2023 - All right reserved"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-flow-col gap-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                className: "fill-current",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                className: "fill-current",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                className: "fill-current",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/BaseLoading.tsx

const BaseLoading_proxy = (0,module_proxy.createProxy)(String.raw`/home/jcx/projectJ/astream-js/next-client/src/components/BaseLoading.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: BaseLoading_esModule, $$typeof: BaseLoading_$$typeof } = BaseLoading_proxy;
/* harmony default export */ const BaseLoading = (BaseLoading_proxy.default);

;// CONCATENATED MODULE: ./src/components/index.ts









/***/ }),

/***/ 1764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9549);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;