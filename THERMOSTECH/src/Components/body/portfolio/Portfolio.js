import React, { Component } from 'react';
import { CardColumns,Col, ModalBody, Modal, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchPortfolio } from '../../../redux/actionCreators';
import Loading from '../Loading';
import PortfolioDetails from './portfoliodetail';
import Portfoliolist from './Portfoliolist';


const mapStateToProps = state => {
    return {
        Portfolio: state.Portfolio,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPortfolio: () => dispatch(fetchPortfolio()),
    }
}

class Portfolio extends Component {
    state = {
        selectedPortfolio: null,
        modalOpen: false
    }

    onPortfolioSelect = Portfolio => {
        this.setState({
            selectedPortfolio: Portfolio,
            modalOpen: !this.state.modalOpen

        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchPortfolio();

    }

    render() {
        document.title = "Portfolio";

        if (this.props.Portfolio.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const Portfolio = this.props.Portfolio.Portfolio.map(item => {
                return (
                    <Portfoliolist
                        Portfolio={item}
                        key={item.id}
                        PortfolioSelect={() => this.onPortfolioSelect(item)}
                    />
                );
            })
            let PortfolioDetail = null;

            if (this.state.selectedPortfolio != null) {
                PortfolioDetail = <PortfolioDetails
                    Portfolio={this.state.selectedPortfolio}
                />
            }

            return (
                <div style={{ overflow: "hidden" }}>
                    <div>
                        <div>
                            <p style={{ paddingTop: "100px", textAlign: "center", fontSize: "40px", fontWeight: "bold", color: "#F38A16" }}>
                                Featured Projects
                            </p>
                            <Col md="12" align="center">
                                <img src='/assets/images/icon.png' alt='' />
                            </Col>
                            <p style={{ paddingTop: "15px", textAlign: "center", fontSize: "16px", }}>
                                Explore some of the success stories we are proud to be associated with. We would be<br />
                                happy to have one with you.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <CardColumns>
                            {Portfolio}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen} style={{border:"none", marginRight:"100%", }}>
                            <ModalBody>
                                {PortfolioDetail}
                                <Button color="warning" outline size='lg' onClick={this.toggleModal} style={{ width:"100px",marginTop:"20px"}}>
                                    Back
                                </Button>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);