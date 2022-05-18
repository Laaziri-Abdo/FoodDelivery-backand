import React from 'react';

const ConatctUs = () => {
  return (
    <div>
    <section id="book-table" class="bg-white">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 d-none d-md-block">
                <img src={require("../assest/imgs/order.jpg")}  class="w-100 rounded shadow"/>
            </div>
            <div class="col-md-6">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
                    </div>
                    <div class="form-group">
                        <input type="tel" class="form-control" name="phone" placeholder="Your Phone"/>
                    </div>
                    <div class="form-group">
                        <input type="datetime-local" class="form-control" name="date"/>
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" name="seats" placeholder="Seats"/>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Order Now</button>
                    <small class="form-text text-muted mt-3">We don't span customers. Check our <a href="#">Privacy Policy</a></small>
                </form>
            </div>
        </div>
    </div>
</section>
    </div>
  );
}

export default ConatctUs;
