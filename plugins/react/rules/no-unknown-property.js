import { isDOMElement, getElementType } from "../utils.js";

// Valid HTML attributes (camelCase as used in JSX)
const defined = new Set([
  // Global HTML attributes
  "accessKey","autoCapitalize","autoCorrect","autoFocus","autoSave",
  "className","color","contentEditable","contextMenu","dir","draggable",
  "enterKeyHint","exportParts","hidden","id","inputMode","is","itemID",
  "itemProp","itemRef","itemScope","itemType","lang","nonce","part",
  "popover","popoverTarget","popoverTargetAction","role","slot","spellCheck",
  "style","tabIndex","title","translate","inert","radioGroup","results",
  "security","unselectable","autoComplete",
  // Event handlers
  "onAbort","onAnimationEnd","onAnimationIteration","onAnimationStart",
  "onAuxClick","onBeforeInput","onBlur","onCanPlay","onCanPlayThrough",
  "onChange","onClick","onCompositionEnd","onCompositionStart",
  "onCompositionUpdate","onContextMenu","onCopy","onCut","onDoubleClick",
  "onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver",
  "onDragStart","onDrop","onDurationChange","onEmptied","onEncrypted",
  "onEnded","onError","onFocus","onGotPointerCapture","onInput","onInvalid",
  "onKeyDown","onKeyPress","onKeyUp","onLoad","onLoadedData",
  "onLoadedMetadata","onLoadStart","onLostPointerCapture","onMouseDown",
  "onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver",
  "onMouseUp","onPaste","onPause","onPlay","onPlaying","onPointerCancel",
  "onPointerDown","onPointerEnter","onPointerLeave","onPointerMove",
  "onPointerOut","onPointerOver","onPointerUp","onProgress","onRateChange",
  "onReset","onResize","onScroll","onScrollEnd","onSeeked","onSeeking",
  "onSelect","onStalled","onSubmit","onSuspend","onTimeUpdate","onToggle",
  "onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onTransitionEnd",
  "onVolumeChange","onWaiting","onWheel",
  // Capture variants
  "onAbortCapture","onAnimationEndCapture","onAnimationIterationCapture",
  "onAnimationStartCapture","onAuxClickCapture","onBeforeInputCapture",
  "onBlurCapture","onCanPlayCapture","onCanPlayThroughCapture",
  "onChangeCapture","onClickCapture","onCompositionEndCapture",
  "onCompositionStartCapture","onCompositionUpdateCapture",
  "onContextMenuCapture","onCopyCapture","onCutCapture","onDoubleClickCapture",
  "onDragCapture","onDragEndCapture","onDragEnterCapture","onDragExitCapture",
  "onDragLeaveCapture","onDragOverCapture","onDragStartCapture","onDropCapture",
  "onDurationChangeCapture","onEmptiedCapture","onEncryptedCapture",
  "onEndedCapture","onErrorCapture","onFocusCapture","onGotPointerCaptureCapture",
  "onInputCapture","onInvalidCapture","onKeyDownCapture","onKeyPressCapture",
  "onKeyUpCapture","onLoadCapture","onLoadedDataCapture",
  "onLoadedMetadataCapture","onLoadStartCapture","onLostPointerCaptureCapture",
  "onMouseDownCapture","onMouseEnterCapture","onMouseLeaveCapture",
  "onMouseMoveCapture","onMouseOutCapture","onMouseOverCapture",
  "onMouseUpCapture","onPasteCapture","onPauseCapture","onPlayCapture",
  "onPlayingCapture","onPointerCancelCapture","onPointerDownCapture",
  "onPointerEnterCapture","onPointerLeaveCapture","onPointerMoveCapture",
  "onPointerOutCapture","onPointerOverCapture","onPointerUpCapture",
  "onProgressCapture","onRateChangeCapture","onResetCapture","onResizeCapture",
  "onScrollCapture","onScrollEndCapture","onSeekedCapture","onSeekingCapture",
  "onSelectCapture","onStalledCapture","onSubmitCapture","onSuspendCapture",
  "onTimeUpdateCapture","onToggleCapture","onTouchCancelCapture",
  "onTouchEndCapture","onTouchMoveCapture","onTouchStartCapture",
  "onTransitionEndCapture","onVolumeChangeCapture","onWaitingCapture",
  "onWheelCapture",
  // ARIA attributes
  "aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel",
  "aria-brailleroledescription","aria-busy","aria-checked","aria-colcount",
  "aria-colindex","aria-colindextext","aria-colspan","aria-controls",
  "aria-current","aria-describedby","aria-description","aria-details",
  "aria-disabled","aria-dropeffect","aria-errormessage","aria-expanded",
  "aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid",
  "aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live",
  "aria-modal","aria-multiline","aria-multiselectable","aria-orientation",
  "aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly",
  "aria-relevant","aria-required","aria-roledescription","aria-rowcount",
  "aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected",
  "aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow",
  "aria-valuetext",
  // HTML element-specific attributes (camelCase)
  "accept","acceptCharset","action","allow","allowFullScreen","allowPaymentRequest",
  "alt","as","async","autoPlay","capture","cellPadding","cellSpacing","challenge",
  "charSet","checked","cite","classID","cols","colSpan","controls","controlsList",
  "coords","crossOrigin","data","dateTime","decoding","default","defaultChecked",
  "defaultValue","defer","disabled","disablePictureInPicture","disableRemotePlayback",
  "download","encType","fetchPriority","form","formAction","formEncType","formMethod",
  "formNoValidate","formTarget","frameBorder","headers","height","high","href",
  "hrefLang","htmlFor","httpEquiv","icon","importance","integrity","keyParams",
  "keyType","kind","label","list","loop","low","manifest","marginHeight",
  "marginWidth","max","maxLength","media","mediaGroup","method","min","minLength",
  "multiple","muted","name","noModule","noValidate","open","optimum","pattern",
  "ping","placeholder","playsInline","poster","preload","profile","readOnly",
  "referrerPolicy","rel","required","reversed","rows","rowSpan","sandbox",
  "scope","scoped","scrolling","seamless","selected","shape","size","sizes",
  "span","src","srcDoc","srcLang","srcSet","start","step","summary","target",
  "type","useMap","value","width","wmode","wrap",
  // SVG attributes (camelCase)
  "accentHeight","accumulate","additive","alignmentBaseline","allowReorder",
  "alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType",
  "autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox",
  "begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits",
  "clipRule","colorInterpolation","colorInterpolationFilters","colorProfile",
  "colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d",
  "decelerate","descent","diffuseConstant","direction","display","divisor",
  "dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground",
  "end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule",
  "filter","filterRes","filterUnits","floodColor","floodOpacity","focusable",
  "fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant",
  "fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal",
  "glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits",
  "hanging","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2",
  "intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning",
  "keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor",
  "limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart",
  "markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical",
  "mode","numOctaves","offset","opacity","operator","order","orient","orientation",
  "origin","overflow","overlinePosition","overlineThickness","paintOrder",
  "panose1","pathLength","patternContentUnits","patternTransform","patternUnits",
  "pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha",
  "preserveAspectRatio","primitiveUnits","r","radius","refX","refY",
  "renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures",
  "restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope",
  "spacing","specularConstant","specularExponent","speed","spreadMethod",
  "startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor",
  "stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke",
  "strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin",
  "strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage",
  "tableValues","targetX","targetY","textAnchor","textDecoration","textLength",
  "textRendering","to","transform","transformOrigin","u1","u2","underlinePosition",
  "underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm",
  "vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX",
  "vertOriginY","viewBox","viewTarget","visibility","vIdeographic","vMathematical",
  "vHanging","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector",
  "xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow",
  "xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink",
  "y","y1","y2","yChannelSelector","z","zoomAndPan",
  // React-specific
  "children","dangerouslySetInnerHTML","defaultChecked","defaultValue",
  "key","ref","suppressContentEditableWarning","suppressHydrationWarning",
  // data-* and aria-* are handled separately
]);

// Known invalid DOM props that are common mistakes
const invalidProps = new Map([
  ["class", "className"],
  ["for", "htmlFor"],
  ["charset", "charSet"],
  ["tabindex", "tabIndex"],
  ["accesskey", "accessKey"],
  ["contenteditable", "contentEditable"],
  ["crossorigin", "crossOrigin"],
  ["datetime", "dateTime"],
  ["enctype", "encType"],
  ["formaction", "formAction"],
  ["formenctype", "formEncType"],
  ["formmethod", "formMethod"],
  ["formnovalidate", "formNoValidate"],
  ["formtarget", "formTarget"],
  ["hreflang", "hrefLang"],
  ["http-equiv", "httpEquiv"],
  ["maxlength", "maxLength"],
  ["minlength", "minLength"],
  ["novalidate", "noValidate"],
  ["readonly", "readOnly"],
  ["rowspan", "rowSpan"],
  ["colspan", "colSpan"],
  ["srcset", "srcSet"],
  ["srcdoc", "srcDoc"],
  ["srclang", "srcLang"],
  ["autoplay", "autoPlay"],
  ["autofocus", "autoFocus"],
  ["autocomplete", "autoComplete"],
]);

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow unknown DOM property names in JSX",
    },
    messages: {
      unknownProp:
        "Unknown prop `{{name}}` found on <{{tag}}> tag. Did you mean `{{suggestion}}`?",
      unknownPropNoSuggestion:
        "Unknown prop `{{name}}` found on <{{tag}}> tag.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const tagName = getElementType(node);
        if (!isDOMElement(tagName)) return;

        for (const attr of node.attributes) {
          if (attr.type !== "JSXAttribute") continue;
          if (attr.name.type !== "JSXIdentifier") continue;

          const propName = attr.name.name;

          // Allow data-* and aria-* attributes
          if (propName.startsWith("data-") || propName.startsWith("aria-")) continue;

          // Allow on* event handlers (any case)
          if (/^on[A-Z]/.test(propName)) continue;

          if (defined.has(propName)) continue;

          const suggestion = invalidProps.get(propName.toLowerCase());
          if (suggestion) {
            context.report({
              node: attr,
              messageId: "unknownProp",
              data: { name: propName, tag: tagName, suggestion },
            });
          } else {
            context.report({
              node: attr,
              messageId: "unknownPropNoSuggestion",
              data: { name: propName, tag: tagName },
            });
          }
        }
      },
    };
  },
};
