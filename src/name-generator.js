module.exports = function() {

    const epochTicks = 621355968000000000;
    const ticksPerMillisecond = 10000;

    var newFileDate = new Date();
    var mainFileName = epochTicks + (newFileDate.getTime() * ticksPerMillisecond);
    var styleFileName = epochTicks + (newFileDate.getTime() * (ticksPerMillisecond * 2));
    var polyFillFileName = epochTicks + (newFileDate.getTime() * (ticksPerMillisecond * 3));

    return {
        mainName: mainFileName + ".js",
        styleName: styleFileName + ".css",
        polyName: polyFillFileName + ".js"
    };
}