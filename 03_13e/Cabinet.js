class Cabinet {
  constructor(
    name,
    drawers,
    color,
    height,
    width,
    depth,
    drawerOpen,
    dateAcquired
  ) {
    this.name = name;
    this.drawers = drawers;
    this.color = color;
    this.dimensions = {
      height: height,
      width: width,
      depth: depth,
    };
    this.drawerOpen = drawerOpen;
    this.dateAcquired = dateAcquired;
  }
  toggleDrawer(drawerStatus) {
    this.drawerStatus = drawerStatus;
  }
  cabinetAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Cabinet;
