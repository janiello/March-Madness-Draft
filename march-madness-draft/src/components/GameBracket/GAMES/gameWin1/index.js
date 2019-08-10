import React, { Component } from "react";
import "./style.css";


class GameWin1 extends Component {
    render() {

        return (
            <div>
                <div className="left">
                  
                    <div className="win1">
                        <div className="box1">
                            {this.props.game1}
                        </div>
                        <div className="box1"><p>{this.props.game2}</p></div>
                    </div>
                    <div className="win1 s2">
                        <div className="box1">
                            <p>{this.props.game3}</p>
                        </div>
                        <div className="box1"><p>{this.props.game4}</p></div>
                    </div>
                    <div className="win1 s3">
                        <div className="box1">
                            <p>{this.props.game5}</p>
                        </div>
                        <div className="box1"><p>{this.props.game6}</p></div>
                    </div>
                    <div className="win1 s4">
                        <div className="box1">
                            <p>{this.props.game7}</p>
                        </div>
                        <div className="box1"><p>{this.props.game8}</p></div>
                    </div>
                </div>
                <div className="bottomLeft">
                    <div className="win1">
                        <div className="box1">
                            <p>{this.props.game01}</p>
                        </div>
                        <div className="box1"><p>{this.props.game02}</p></div>
                    </div>
                    <div className="win1 s2">
                        <div className="box1">
                            <p>{this.props.game03}</p>
                        </div>
                        <div className="box1"><p>{this.props.game04}</p></div>
                    </div>
                    <div className="win1 s3">
                        <div className="box1">
                            <p>{this.props.game05}</p>
                        </div>
                        <div className="box1"><p>{this.props.game06}</p></div>
                    </div>
                    <div className="win1 s4">
                        <div className="box1">
                            <p>{this.props.game07}</p>
                        </div>
                        <div className="box1"><p>{this.props.game08}</p></div>
                    </div>
                </div>
                <div className="right">
                    <div className="win01">
                        <div className="box01">
                            <p>{this.props.game001}</p>
                        </div>
                        <div className="box01"><p>{this.props.game002}</p></div>
                    </div>
                    <div className="win01 s2">
                        <div className="box01">
                            <p>{this.props.game003}</p>
                        </div>
                        <div className="box01"><p>{this.props.game004}</p></div>
                    </div>
                    <div className="win01 s3">
                        <div className="box01">
                            <p>{this.props.game005}</p>
                        </div>
                        <div className="box01"><p>{this.props.game006}</p></div>
                    </div>
                    <div className="win01 s4">
                        <div className="box01">
                            <p>{this.props.game007}</p>
                        </div>
                        <div className="box01"><p>{this.props.game008}</p></div>
                    </div>
                </div>
                <div className="bottomRight">
                    <div className="win01">
                        <div className="box01">
                            <p>{this.props.game0001}</p>
                        </div>
                        <div className="box01"><p>{this.props.game0002}</p></div>
                    </div>
                    <div className="win01 s2">
                        <div className="box01">
                            <p>{this.props.game0003}</p>
                        </div>
                        <div className="box01"><p>{this.props.game0004}</p></div>
                    </div>
                    <div className="win01 s3">
                        <div className="box01">
                            <p>{this.props.game0005}</p>
                        </div>
                        <div className="box01"><p>{this.props.game0006}</p></div>
                    </div>
                    <div className="win01 s4">
                        <div className="box01">
                            <p>{this.props.game0007}</p>
                        </div>
                        <div className="box01"><p>{this.props.game0008}</p></div>
                    </div>
                </div>
            </div>
        );
    };
};

export default GameWin1;