import RenderContext from "../../Render/RenderContext"

class CurrentSettings {

    #_renderContext;

    constructor() {
        /**@type {import("../../Render/RenderContext").ContextSettings} */
        this.#_renderContext = undefined
        /**@type {import("./SettingsManager").SettingsManager} */
        this.settingsManager = undefined
        /**@type {import("../../Components/DungeonMap").DungeonMap} */
        this.currentDungeon = undefined
        /**@type {import("../../Render/RenderContextManager").RenderContextManager} */
        this.renderContextManager = undefined
    }

    /**@returns {import("../../Render/RenderContext").ContextSettings} */
    get settings() {
        return this.#_renderContext?.settings || RenderContext.addMissing({})
    }

    /**
     * @param {import("../../Render/RenderContext").RenderContext} sett
     */
    set renderContext(sett) {
        this.#_renderContext = sett
    }
}

if (!global.betterMapCurrentSettings) {
    global.betterMapCurrentSettings = new CurrentSettings()
}
/**@type {CurrentSettings} */
let settings = global.betterMapCurrentSettings

export default settings