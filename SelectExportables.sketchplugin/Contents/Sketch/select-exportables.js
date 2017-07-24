function onRun(context) {
  var doc = context.document;
  var page = doc.currentPage();

  // for backwards compatibility (see: http://sketchplugins.com/d/280-deselectalllayers-not-working-in-v45)
  if(page.deselectAllLayers){
    page.deselectAllLayers();
  } else {
    page.changeSelectionBySelectingLayers_([]);
  }

  // select layers
  var slices = doc.currentPage().exportableLayers();
  var loop = slices.objectEnumerator();
  while (slice = loop.nextObject()) {
    slice.select_byExpandingSelection(true, true);
  }

  // select artboards
  //var artboards = doc.currentPage().artboards();
  //var loop = artboards.objectEnumerator();
  //while (artboard = loop.nextObject()) {
  //  if (artboard.exportOptions().exportFormats()) {
  //    artboard.select_byExpandingSelection(true, true);
  //    count++;
  //  }
  //}

  doc.showMessage(page.selectedLayers().layers().count() + " layers selected");
};
