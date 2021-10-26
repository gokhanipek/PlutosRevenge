import React from "react";
import seperator from './../assets/images/seperator.png';
import wheelBackground from './../assets/images/background-spin-wheel.png';
import wheelCenter from './../assets/images/planet-smashiconsfromflaticon.png';
import "./SpinWheel.scss";
import { findAward, setPlutoStatus, setAvailableAttacks } from "../store/actions";
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
            const selectedItem = Math.floor(Math.random() * 10) + 1;


            !!selectedItem && this.props.findAWard(selectedItem);


            if (this.props.onSelectItem) {
                this.props.onSelectItem(selectedItem);
            }
            this.setState({ selectedItem });
        } else {
            this.setState({ selectedItem: null });
            setTimeout(this.selectItem, 500);
        }
        setTimeout(() => {
            this.wheelRef.current.classList.remove('spinning');
            this.awardRef.current.classList.add('visible');
        }, 11000);
    }

    awardOnClickHandler = (award) => {
        const pluto = this.props.planets[8];

        const newAttacks = this.props.plutoStatus.properties.attacks.length === 4 ? this.props.plutoStatus.properties.attacks.splice(1) : this.props.plutoStatus.properties.attacks;
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
                    this.props.availableAwards[0]
                ]
            }
        }
        this.props.setPlutoStatus(award.id === 6 || award.id === 10 ? newPlutoAttacks : newPluto);
        this.props.history.push('../fullview')
        const newAvailableAttacks = [6, 10].includes(award.id) && this.props.availableAwards.slice(1);
        [6, 10].includes(award.id) && this.props.setAvailableAttacks(newAvailableAttacks);
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
            <div className="wheel-container-outline-wrapper">
                <div className="award-screen" ref={this.awardRef}>
                    {this.props.award &&
                        <>
                            {[6, 10].includes(this.props.award.id) ?
                                <>
                                    <h2>Congragulations! {this.props.award.message}, You new attack is, {this.props.availableAwards[0].name}! Check your profile about your new attack!</h2>
                                    <button onClick={() => this.awardOnClickHandler(this.props.award)}>Go back to map</button>
                                </> :
                                this.props.plutoStatus.properties.size + this.props.award.effect > 0 ?
                                    <>
                                        <h2>{this.props.award.message} now you have {this.props.plutoStatus.properties.size + this.props.award.effect} health points!</h2>
                                        <button onClick={() => this.awardOnClickHandler(this.props.award)}>Go back to map</button>
                                    </> :
                                    <>
                                        <h3>Too bad... You are an example of how bad habits can destroy a beautiful being... Your effords of revenge has come to a miserable end...</h3>
                                        <button onClick={() => this.props.history.push('../deepdarkness')}>Meet your destiny</button>
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

const mapStateToProps = (state) => ({
    award: state.awardsReducer.lastAward,
    availableAwards: state.awardsReducer.availableAttackAwards,
    planets: state.planetsReducer.planets,
    plutoStatus: state.planetsReducer.plutoStatus
});



const mapDispatchToProps = (dispatch) => ({
    findAWard: (id) => dispatch(findAward(id)),
    setPlutoStatus: (item) => dispatch(setPlutoStatus(item)),
    setAvailableAttacks: (attacks) => dispatch(setAvailableAttacks(attacks))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wheel));
