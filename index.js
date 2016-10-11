/**
 * Exact round action
 * @param {'round'|'floor'|'ceil'} action
 * @param {number} value
 * @param {number} roundToValue
 * @param {boolean} [exactPrecision=false]
 * @returns {number}
 */
function roundTo(action, value, roundToValue, exactPrecision) {
    if (!value) {
        return value;
    } else if (!roundToValue) {
        return Math[action](value);
    } else {
        var result = (Math[action](value / roundToValue) * roundToValue);
        if (exactPrecision) {
            var minStepDecimals = ('' + roundToValue).split('.')[1];
            minStepDecimals = minStepDecimals && minStepDecimals.length || 0;

            return +result.toFixed(minStepDecimals);
        } else {
            return result;
        }
    }
}

module.exports = {
    /**
     * Math.round analog for round-to
     * @param {number} value
     * @param {number} roundToValue
     * @param {boolean} [exactPrecision=false]
     * @returns {number}
     */
    round: function (value, roundToValue, exactPrecision) {
        return roundTo('round', value, roundToValue, exactPrecision);
    },
    /**
     * Math.floor analog for round-to
     * @param {number} value
     * @param {number} roundToValue
     * @param {boolean} [exactPrecision=false]
     * @returns {number}
     */
    floor: function (value, roundToValue, exactPrecision) {
        return roundTo('floor', value, roundToValue, exactPrecision);
    },
    /**
     * Math.ceil analog for round-to
     * @param {number} value
     * @param {number} roundToValue
     * @param {boolean} [exactPrecision=false]
     * @returns {number}
     */
    ceil: function (value, roundToValue, exactPrecision) {
        return roundTo('ceil', value, roundToValue, exactPrecision);
    }
};