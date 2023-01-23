class MiComponente extends React.Component {
    constructor(props) {
        super(props);
        this.input1Ref = React.createRef();
        this.input2Ref = React.createRef();
    }

    render() {
        return (
<div className="form-row">
<div className="input-group input-group-sm mb-3 col-md-6">
<div className="input-group-prepend">
<span className="input-group-text">Total compras de cartera</span>
<span className="input-group-text">$</span>
</div>
<input type="text" className="form-control" ref={this.input1Ref} required />
<div className="input-group-append">
<span className="input-group-text">.00</span>
</div>
</div>
<div className="input-group input-group-sm mb-3 col-md-6">
<div className="input-group-prepend">
<span className="input-group-text">Desembolso al cliente</span>
<span className="input-group-text">$</span>
</div>
<input type="text" className="form-control" ref={this.input2Ref} />
<div className="input-group-append">
<span className="input-group-text">.00</span>
</div>
</div>
</div>
);
}
}

const domContainer = document.querySelector('.daniel');
const root = ReactDOM.createRoot(domContainer);

