import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/standUpAgendaTTab/index.html")
@PreventIframe("/standUpAgendaTTab/config.html")
@PreventIframe("/standUpAgendaTTab/remove.html")
export class StandUpAgendaTTab {
}
