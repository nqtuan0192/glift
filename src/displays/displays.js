goog.provide('glift.displays');

glift.displays = {
  /**
   * Create the display.  Delegates to board.create(...), which creates an SVG
   * based Go Board.
   *
   * @param {string} divId
   * @param {!glift.orientation.BoundingBox} boardBox
   * @param {!glift.themes.base} theme Glift theme.
   * @param {glift.enums.boardRegions} boardRegion Board region to crop the
   *    board to.
   * @param {number} intersections Number of intersections for the Go
   *    board. Usually 9, 13 or 19.
   * @param {glift.enums.rotations} rotation Apply a rotation to the Go board
   *    during the draw phase.
   * @param {boolean} drawBoardCoords Whether or not to draw the board
   *    coordinates.
   *
   * @return {glift.displays.board.Display} The display.
   */
  create: function(
      divId,
      boardBox,
      theme,
      boardRegion,
      intersections,
      rotation,
      drawBoardCoords) {
    glift.util.majorPerfLog("Before environment creation");

    var env = glift.displays.environment.get(
        divId, boardBox, boardRegion, intersections, drawBoardCoords);

    glift.util.majorPerfLog("After environment creation");
    return glift.displays.board.create(env, theme, rotation);
  },

  /**
   * Return the bounding box for a div.
   * @param {string} divId ID of a div.
   * @return {!glift.orientation.BoundingBox}
   */
  bboxFromDiv: function(divId) {
    var elem = glift.dom.elem(divId);
    return glift.orientation.bbox.fromSides(
        glift.util.point(0,0), elem.width(), elem.height());
  }
};
