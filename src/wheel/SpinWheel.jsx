import React from "react";
import seperator from './../assets/images/seperator.png';
import wheelBackground from './../assets/images/background-spin-wheel.png';
import "../styles/wheel.css";
import { selectAward, setPlutoStatus, setAvailableAttacks, recordSpin, endSession } from "../store/actions";
import { isAttackAward } from "../store/awards";
import { LOST } from "../store/constants";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class Wheel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        };
        this.selectItem = this.selectItem.bind(this);
        this.wheelRef = React.createRef();
        this.awardRef = React.createRef();
        this.outlineRef = React.createRef();
    }

    selectItem() {
        if (this.outlineRef.current.classList.contains('spinning')) return;
        if (this.state.selectedItem === null) {
            // A 0-based index into the award table, which is also the slice the
            // wheel rotates under the indicator. Index 0 is a legitimate result,
            // so this must never be truthiness-checked.
            const selectedItem = Math.floor(Math.random() * this.props.items.length);

            this.props.selectAward(selectedItem);

            if (this.props.onSelectItem) {
                this.props.onSelectItem(selectedItem);
            }
            this.setState({ selectedItem });
        } else {
            this.setState({ selectedItem: null });
            setTimeout(this.selectItem, 500);
        }
        // Reveal the result once the wheel has settled. The wheel deliberately
        // keeps its `spinning` class: dropping it would reset the transform to
        // 0deg, parking slice 0 under the indicator while the overlay announces
        // a different award.
        setTimeout(() => {
            this.awardRef.current.classList.add('visible');
        }, 11000);
    }

    // A spin that takes Pluto to zero ends the run there and then.
    loseHandler = () => {
        this.props.recordSpin();
        this.props.endSession(LOST);
        this.props.history.push('/deepdarkness');
    }

    awardOnClickHandler = (award) => {
        const pluto = this.props.planets && this.props.planets[8];
        if (!pluto) {
            console.error('Pluto not found in planets array');
            return;
        }

        const newAttacks = this.props.plutoStatus.properties.attacks.length === 4 ? this.props.plutoStatus.properties.attacks.slice(1) : this.props.plutoStatus.properties.attacks;
        const newPluto = {
            ...pluto,
            properties: {
                ...this.props.plutoStatus.properties,
                size: award.effect + this.props.plutoStatus.properties.size,
                attacks: [
                    ...this.props.plutoStatus.properties.attacks
                ]
            }
        }

        const newPlutoAttacks = {
            ...pluto,
            properties: {
                ...this.props.plutoStatus.properties,
                attacks: [
                    ...newAttacks,
                    this.props.availableAwards && this.props.availableAwards[0] ? this.props.availableAwards[0] : { name: 'Unknown', damage: 0 }
                ]
            }
        }
        this.props.setPlutoStatus(isAttackAward(award) ? newPlutoAttacks : newPluto);
        if (isAttackAward(award) && this.props.availableAwards && this.props.availableAwards.length > 0) {
            this.props.setAvailableAttacks(this.props.availableAwards.slice(1));
        }
        // Recorded last: this is the transition the session mirror listens for,
        // so the snapshot it takes already includes the award's effect.
        this.props.recordSpin();
        this.props.history.push('/fullview')
    }

    render() {
        const { selectedItem } = this.state;
        const { items } = this.props;
        const wheelVars = {
            "--nb-item": items.length,
            "--selected-item": selectedItem,
            backgroundImage: `url(${wheelBackground})`
        };
        const spinning = selectedItem !== null ? "spinning" : "";

        return (
            <div className="flex h-full w-full items-center justify-center">
                <div className="overlay-card border-y border-edge bg-abyss/95" ref={this.awardRef}>
                    {this.props.award && this.props.award.kind &&
                        <>
                            {isAttackAward(this.props.award) ?
                                <>
                                    <h2 className="prose-constrained text-center text-canvas-sm text-chalk">
                                        {this.props.award.message} Your new attack is {this.props.availableAwards[0].name}.
                                    </h2>
                                    <button className="btn btn-primary" onClick={() => this.awardOnClickHandler(this.props.award)}>Back to map</button>
                                </> :
                                this.props.plutoStatus.properties.size + this.props.award.effect > 0 ?
                                    <>
                                        <h2 className="prose-constrained text-center text-canvas-sm text-chalk">
                                            {this.props.award.message} You are now at {this.props.plutoStatus.properties.size + this.props.award.effect} size.
                                        </h2>
                                        <button className="btn btn-primary" onClick={() => this.awardOnClickHandler(this.props.award)}>Back to map</button>
                                    </> :
                                    <>
                                        <h3 className="prose-constrained text-center text-canvas-sm text-chalk">
                                            Too bad. You are an example of how bad habits can destroy a beautiful being. Your quest for revenge has come to a miserable end.
                                        </h3>
                                        <button className="btn" onClick={() => this.loseHandler()}>Meet your destiny</button>
                                    </>
                            }
                        </>
                    }
                </div>
                <div
                    className={`wheel-container-outline ${spinning}`}
                    onClick={this.selectItem}
                    ref={this.outlineRef}
                >
                    <div className="wheel outer-wheel">
                        <span className="indicator"></span>
                        <div className={`wheel-container  ${spinning}`}>
                            <div className={`wheel ${spinning}`} ref={this.wheelRef} style={wheelVars}>
                                {items.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        <div
                                            className="wheel-item"
                                            style={{ "--item-nb": index }}
                                        >
                                            {item.sliceImageUrl && (
                                                <img
                                                    className="item-image"
                                                    alt=""
                                                    src={item.sliceImageUrl}
                                                />
                                            )}
                                            {item.backgroundImageUrl && (
                                                <img
                                                    className="slice-background"
                                                    alt=""
                                                    src={item.backgroundImageUrl}
                                                />
                                            )}
                                        </div>
                                        <div
                                            className="wheel-item seperator"
                                            style={{ "--item-nb": index }}
                                        >
                                            <img
                                                className="seperator-image"
                                                alt=""
                                                src={seperator}
                                            />
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    award: state.awardsReducer.lastAward,
    availableAwards: state.awardsReducer.availableAttackAwards,
    planets: state.planetsReducer.planets,
    plutoStatus: state.planetsReducer.plutoStatus
});



const mapDispatchToProps = (dispatch) => ({
    selectAward: (index) => dispatch(selectAward(index)),
    setPlutoStatus: (item) => dispatch(setPlutoStatus(item)),
    setAvailableAttacks: (attacks) => dispatch(setAvailableAttacks(attacks)),
    recordSpin: () => dispatch(recordSpin()),
    endSession: (status) => dispatch(endSession(status))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wheel));
