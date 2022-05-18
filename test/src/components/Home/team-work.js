import React from 'react';

const TeamWork = () => {
  return (
    <div>
    <section id="team">
    <div class="container">
        <h6 class="section-subtitle text-center">Great Team</h6>
        <h3 class="section-title mb-5 text-center">Talented Deliverers</h3>
        <div class="row">
            <div class="col-md-4 my-3">
                <div class="team-wrapper text-center">
                    <img src={require("../assest/imgs/youssef.jpg") } class="circle-120 rounded-circle mb-3 shadow" />
                    <h5 class="my-3">Samira Hamim</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                    <h6 class="socials mt-3">
                        <a href="javascript:void(0)" class="px-2"><i class="ti-facebook"></i></a>
                        <a href="javascript:void(0)" class="px-2"><i class="ti-twitter"></i></a>
                        <a href="javascript:void(0)" class="px-2"><i class="ti-instagram"></i></a>
                        <a href="javascript:void(0)" class="px-2"><i class="ti-google"></i></a>
                    </h6>
                </div>
            </div>
            <div class="col-md-4 my-3">
                <div class="team-wrapper text-center">
                    <img src={require("../assest/imgs/chef-2.jpg") } class="circle-120 rounded-circle mb-3 shadow" />
                    <h5 class="my-3">Youssef Bouhalla</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                    <h6 class="socials mt-3">
                        <a href="javascript:void(0)" class="px-2"><i class="ti-facebook"></i></a>
                        <a href="javascript:void(0)" class="px-2"><i class="ti-twitter"></i></a>
                        <a href="javascript:void(0)" class="px-2"><i class="ti-instagram"></i></a>
                        <a href="javascript:void(0)" class="px-2"><i class="ti-google"></i></a>
                    </h6>
                </div>
            </div>
            <div class="col-md-4 my-3">
                <div class="team-wrapper text-center">
                    <img src={require("../assest/imgs/chef-3.jpg") } class="circle-120 rounded-circle mb-3 shadow" />
                    <h5 class="my-3">Mourad Mergom</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                    <h6 class="socials mt-3">
                        <a href="javascript:void(0)" class="px-2"><i class="ti-facebook"></i></a>
                        <a href="javascript:void(0)" class="px-2"><i class="ti-twitter"></i></a>
                        <a href="javascript:void(0)" class="px-2"><i class="ti-instagram"></i></a>
                        <a href="javascript:void(0)" class="px-2"><i class="ti-google"></i></a>
                    </h6>
                </div>
            </div> 
        </div>
    </div>
</section>
    </div>
  );
}

export default TeamWork;
