const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const name = 'b4ckbone';
			const selector = `.${name}`;
			const fullSelector = `.${name}-full`;
			const centeredSelector = `.${name}-centered`;

			const col1 = `${name}-edge`;
			const col2 = `${name}-breakout`;
			const col3 = `${name}-popout`;
			const middle = `${name}-content`;

			const middleSelector = `.${middle}`;
			const middleSelectorStart = `.${middle}-start`;
			const middleSelectorEnd = `.${middle}-end`;
			const col1SelectorStart = `.${col1}-start`;
			const col1SelectorEnd = `.${col1}-end`;
			const col2Selector = `.${col2}`;
			const col2SelectorStart = `.${col2}-start`;
			const col2SelectorEnd = `.${col2}-end`;
			const col3Selector = `.${col3}`;
			const col3SelectorStart = `.${col3}-start`;
			const col3SelectorEnd = `.${col3}-end`;

			addUtilities({
				[`${selector}`]: {
					[`--${middle}-max-width`]: '80rem',
					[`--${col1}`]: '1rem',
					[`--${col2}`]: '0rem',
					[`--${col3}`]: '0rem',
					'@media (min-width: 30rem)': {
						[`--${col1}`]: 'var(--spacing-22-80)',
					},
					'@media (min-width: 64rem)': {
						[`--${col2}`]: 'var(--spacing-22-100)',
					},
					'@media (min-width: 80rem)': {
						[`--${col3}`]: 'var(--spacing-22-140)',
					},
					[`& > :not(${fullSelector}), & ${fullSelector} > *`]: {
						[`--${col3}-without-${middle}`]: `var(--${col3})`,
						[`--${col2}-without-${middle}`]: `calc(var(--${col2}) + var(--${col3}))`,
						[`--${col1}-without-${middle}`]: `calc(var(--${col1}) + var(--${col2}) + var(--${col3}))`,
						[`--${middle}-spacing`]: `calc((100% - var(--left-without-${middle}, 0rem) - var(--right-without-${middle}, 0rem) - var(--${middle}-max-width)) / 2)`,
						[`--${col3}-spacing`]: `max(var(--${col3}-without-${middle}), var(--${col3}-without-${middle}) + var(--${middle}-spacing))`,
						[`--${col2}-spacing`]: `max(var(--${col2}-without-${middle}), var(--${col2}-without-${middle}) + var(--${middle}-spacing))`,
						[`--${col1}-spacing`]: `max(var(--${col1}-without-${middle}), var(--${col1}-without-${middle}) + var(--${middle}-spacing))`,
					},
					[`&, & ${fullSelector}`]: {
						'display': 'grid',
						'grid-template-columns': `[${col1}-start] var(--${col1}) [${col2}-start] var(--${col2}) [${col3}-start] var(--${col3}) [${middle}-start] 1fr [${middle}-end] var(--${col3}) [${col3}-end] var(--${col2}) [${col2}-end] var(--${col1}) [${col1}-end]`,
					},
					[`& > :not(${middleSelector}, ${middleSelectorStart}, ${middleSelectorEnd}, ${col3Selector}, ${col3SelectorStart}, ${col3SelectorEnd}, ${col2Selector}, ${col2SelectorStart}, ${col2SelectorEnd}, ${col1SelectorStart}, ${col1SelectorEnd}), & ${fullSelector} > :not(${middleSelector}, ${middleSelectorStart}, ${middleSelectorEnd}, ${col3Selector}, ${col3SelectorStart}, ${col3SelectorEnd}, ${col2Selector}, ${col2SelectorStart}, ${col2SelectorEnd}, ${col1SelectorStart}, ${col1SelectorEnd}), & ${fullSelector}`]: {
						'grid-column': [`${col1}`],
					},
					[`&${centeredSelector} > :not(${fullSelector}), & > ${centeredSelector}:not(${fullSelector}), &${centeredSelector} ${fullSelector} > *, & ${fullSelector}${centeredSelector} > *, & ${fullSelector} > ${centeredSelector}`]: {
						'padding-left': 'var(--left-spacing)',
						'padding-right': 'var(--right-spacing)',
					}
				},
				[`${middleSelector}`]: {
					'grid-column': middle,
					'justify-self': 'center',
					'width': '100%',
					'max-width': `var(--${middle}-max-width)`,
				},
				[`${middleSelectorStart}`]: {
					'grid-column-start': middle,
					'margin-left': `max(var(--left-spacing, 0rem), var(--left-spacing, 0rem) + var(--${middle}-spacing))`,
				},
				[`${middleSelectorEnd}`]: {
					'grid-column-end': middle,
					'margin-right': `max(var(--right-spacing, 0rem), var(--right-spacing, 0rem) + var(--${middle}-spacing))`,
				},
				[`${col3Selector}`]: {
					'grid-column': col3,
					[`--left-without-${middle}`]: `var(--${col3}-without-${middle})`,
					[`--right-without-${middle}`]: `var(--${col3}-without-${middle})`,
					'--left-spacing': `var(--${col3}-spacing)`,
					'--right-spacing': `var(--${col3}-spacing)`,
				},
				[`${col3SelectorStart}`]: {
					'grid-column-start': col3,
					[`--left-without-${middle}`]: `var(--${col3}-without-${middle})`,
					'--left-spacing': `var(--${col3}-spacing)`,
				},
				[`${col3SelectorEnd}`]: {
					'grid-column-end': col3,
					[`--right-without-${middle}`]: `var(--${col3}-without-${middle})`,
					'--right-spacing': `var(--${col3}-spacing)`,
				},
				[`${col2Selector}`]: {
					'grid-column': col2,
					[`--left-without-${middle}`]: `var(--${col2}-without-${middle})`,
					[`--right-without-${middle}`]: `var(--${col2}-without-${middle})`,
					'--left-spacing': `var(--${col2}-spacing)`,
					'--right-spacing': `var(--${col2}-spacing)`,
				},
				[`${col2SelectorStart}`]: {
					'grid-column-start': col2,
					[`--left-without-${middle}`]: `var(--${col2}-without-${middle})`,
					'--left-spacing': `var(--${col2}-spacing)`,
				},
				[`${col2SelectorEnd}`]: {
					'grid-column-end': col2,
					[`--right-without-${middle}`]: `var(--${col2}-without-${middle})`,
					'--right-spacing': `var(--${col2}-spacing)`,
				},
				[`${col1SelectorStart}`]: {
					'grid-column-start': col1,
					[`--left-without-${middle}`]: `var(--${col1}-without-${middle})`,
					'--left-spacing': `var(--${col1}-spacing)`,
				},
				[`${col1SelectorEnd}`]: {
					'grid-column-end': col1,
					[`--right-without-${middle}`]: `var(--${col1}-without-${middle})`,
					'--right-spacing': `var(--${col1}-spacing)`,
				}
			})
		})
	],
}
