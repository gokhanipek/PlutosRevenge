import React from "react";
import seperator from './../assets/images/seperator.png';
import wheelBackground from './../assets/images/background-spin-wheel.png';
import wheelCenter from './../assets/images/planet-smashiconsfromflaticon.png';
import "./SpinWheel.scss";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    };
    this.selectItem = this.selectItem.bind(this);
    this.divRef = React.createRef();
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = 2;
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
    console.warn(this.divRef.current.style);
}

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;
    console.warn(items, selectedItem);
    
    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
      backgroundImage: `url(${wheelBackground})`
    };
    const spinning = selectedItem !== null ? "spinning" : "";

    return (
        <div className="wheel-container-outline-wrapper">
      <div
        className={`wheel-container-outline ${spinning}`}
        onClick={this.selectItem}
      >
        <div className="wheel outer-wheel">
            <img className="wheel-center" src={wheelCenter} alt="There is a planet in the center of spin-wheel" />
          <div className={`wheel-container  ${spinning}`} ref={this.divRef}>
            <div className={`wheel ${spinning}`} style={wheelVars}>
              {items.map((item, index) => (
                <>
                  <div
                    className="wheel-item"
                    key={item.id}
                    style={{ "--item-nb": index }}
                  >
                    <span className="item-odd">{item.odd}</span>
                    {item.backgroundImageUrl && (
                      <>
                        {item.sliceImageUrl && (
                          <img
                            className={`item-image ${item.type}`}
                            alt="odd"
                            src={item.sliceImageUrl}
                          />
                        )}
                        <img
                          className="slice-background"
                          alt="bg"
                          src={item.backgroundImageUrl}
                        />
                      </>
                    )}
                  </div>
                  <div
                    className="wheel-item seperator"
                    key={index}
                    style={{ "--item-nb": index }}
                  >
                    <img
                      className="seperator-image"
                      alt="seperator"
                      src={seperator}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
}
