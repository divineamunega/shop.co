import { css } from "styled-components";
import breakpoints from "./breakpoints";
import { RuleSet } from "styled-components";

const xsScreen = (cssStyle: RuleSet<object>) =>
	`
		@media (min-width: ${breakpoints.xs}) {
			${cssStyle}
		}
	`;

const smScreen = (cssStyle: RuleSet<object>) =>
	css`
		@media (min-width: ${breakpoints.sm}) {
			${cssStyle}
		}
	`;

const mdScreen = (cssStyle: RuleSet<object>) =>
	css`
		@media (min-width: ${breakpoints.md}) {
			${cssStyle}
		}
	`;

const lgScreen = (cssStyle: RuleSet<object>) =>
	css`
		@media (min-width: ${breakpoints.lg}) {
			${cssStyle}
		}
	`;

export { xsScreen, smScreen, mdScreen, lgScreen };
