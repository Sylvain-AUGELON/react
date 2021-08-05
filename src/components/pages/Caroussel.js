

const Caroussel = () => {
return (
    <div className="container">
    <div className="row">
        <div className="col-12">
        <h3>Caroussel</h3>
        </div>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../../assets/descendmanu.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../../assets/lemac.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../../assets/macrongj.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</div>
</div>)
}

export default Caroussel;