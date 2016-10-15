function onRun(context) {
  var doc = context.document;
  doc.currentPage().deselectAllLayers();

  var count = 0;

  // select layers
  var slices = doc.currentPage().exportableLayers();
  var loop = slices.objectEnumerator();
  while (slice = loop.nextObject()) {
    slice.select_byExpandingSelection(true, true);
    count++;
  }

  // select artboards
  var artboards = doc.currentPage().artboards();
  var loop = artboards.objectEnumerator();
  while (artboard = loop.nextObject()) {
    if (artboard.exportOptions().exportFormats()) {
      artboard.select_byExpandingSelection(true, true);
      count++;
    }
  }

  doc.showMessage(count + " layers selected");
};
