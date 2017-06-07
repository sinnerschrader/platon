import config from '../../config';

export default function(context) {
  /* const data = {
    "compatibleVersion": "2.0",
    "pluginVersion": "2.10",
    "colors": config.colorTiles.colors.map(color => {
      const c = MSImmutableColor.colorWithSVGString(color.hex);
      return {
        red: c.red(),
        green: c.green(),
        blue: c.blue(),
        alpha: c.alpha()
      };
    }),
    "gradients": [],
    "images": []
  };

  const save = NSSavePanel.savePanel();
  save.setNameFieldStringValue('untitled.sketchpalette');
  save.setAllowedFileTypes(['sketchpalette']);
  save.setAllowsOtherFileTypes(false);
  save.setExtensionHidden(false);

  if (save.runModal()) {
    const path = save.URL().path();
    const file = NSString.stringWithString(JSON.stringify(data));
    file.writeToFile_atomically_encoding_error(path, true, NSUTF8StringEncoding, null);
  } */
}
