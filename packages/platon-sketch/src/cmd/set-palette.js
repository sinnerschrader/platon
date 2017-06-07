import colors from '../colors';

export default function(context) {
  const assets = context.document.documentData().assets();

  assets.setColors(colors.map(color => {
    return MSImmutableColor.colorWithSVGString(color.hex);
  }));
}
