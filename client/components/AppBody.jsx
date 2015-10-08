let Transition = React.addons.CSSTransitionGroup;
AppBody = React.createClass({
    setModalState(status) {
        this.setState({
            modal: status
        })
    },
    ionModal(tab, content) {
        this.setState({
            modal: (
                <IonModal modalContent={content}>
                    <div className="h1 title">{tab}</div>
                    <button onClick={ () => this.setState({modal:false}) } className="button button-icon active">
                        <i className="icon ion-ios-close-empty"></i>
                    </button>
                </IonModal>
            )
        })
    },
    getDefaultProps()
    {
        return {
            tabs: ["Tab 1", "Tab 2", "Tab 3"]
        }
    },
    getInitialState() {
        return {
            modal: false
        }
    },
    render() {

        return (
            <div className="ionic-body">
                <div className="bar bar-header bar-positive">
                    <ReactRouter.Link className="button button-icon icon ion-gear-a"
                                      to={"/settings"}></ReactRouter.Link>
                    <ReactRouter.Link className="h1 title" to={"/"}>Meteor Rocks!</ReactRouter.Link>

                    <ReactRouter.Link className="button button-icon icon ion-heart" to={"/other"}></ReactRouter.Link>
                </div>

                <div className="view">
                    <div className="scroll-content ionic-scroll">
                        <div className="content overflow-scroll has-header">
                            <ReactRouter.RouteHandler setModalState={this.setModalState} ionModal={this.ionModal}/>
                        </div>
                    </div>
                </div>

                <div className="tabs tabs-icon-top">
                    {this.props.tabs.map((tab, i) => {
                        return (
                            <a className="tab-item" key={tab} onClick={this.ionModal.bind(null, tab)}>
                                <i className="icon ion-star"></i>
                                {tab}
                            </a>
                        )
                    })
                    }
                </div>
                {this.state.modal ? <Backdrop /> : false}
                <Transition transitionName="modal">
                    {this.state.modal}
                </Transition>
            </div>
        )

    }
})
