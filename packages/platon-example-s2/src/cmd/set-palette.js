import config from '../../config';

export default function(context) {
  const assets = context.document.documentData().assets();

  assets.setColors(config.colorTiles.colors.map(color => {
    return MSImmutableColor.colorWithSVGString(color.hex);
  }));
}
