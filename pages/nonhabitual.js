import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

const test = () => {
  
  return (
    <div>
      <main className="pageLayout">
        <div class="container">
          <h1 className='boxtitle textheader' style={{ textAlign: 'center' }}>
            Programming Project
          </h1>
          <br></br>


          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style={{ width: 200 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">25%</div>
          </div>

          <br></br>

          {/*list of activities*/}

          <div className='boxactivity'>
            <div class="row row-cols-10" >
              <div class="col-10" > <h4 className='textheader'>Activities</h4></div>

              <div class="col text-center"><h4 className='textheader'>Deadline</h4></div>

              <ul>
                <li class="form-check col-10">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    design prototype

                    {/* <div class="col-2" className='date' style={{float:'right'}}> 
              21/2/2022
              {/* <input type="date"/>           
              </div> */}
                  </label>


                </li>
                {/* <div class="col-2" className='date' style={{float:'right'}}>20/2/2022</div> */}


                <li class="form-check col-10">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    submit design
                    {/**  <div class="col-2 text-right" style={{float:'right'}}>
              <input type="date"/>           
              </div> */}
                  </label>
                </li>

                <li class="form-check col-10">
                  <input class="form-check-input" type="checkbox" value="" />
                  <input class="form-control form-control-sm border-0 " type="text" placeholder="add activity" />
                  {/**  <div class="col-2 text-center" style={{float:'right'}}>
              <input type="date"/></div> */}
                </li>


              </ul>

            </div>


            <br></br>
            <hr></hr>
            <br></br>

            {/*activity that has been done*/}

            <div class="form-check col-10">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
              <label class="form-check-label" for="flexCheckDefault">
                <del>find groupmates</del>
              </label>
            </div>

            <div class="form-check col-10">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
              <label class="form-check-label" for="flexCheckDefault">
                <del>receive task</del>
              </label>
            </div>

            <div class="form-check col-10">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
              <label class="form-check-label" for="flexCheckDefault">
                <del>assign task</del>
              </label>
            </div>

          </div>

        </div>

      </main>


      <footer className='pagelayout'>

      </footer>


      {/*styles*/}

      <style jsx>{`
              .pageLayout {
                background-color: #F5EBE0;
                padding-left: 200px;
                padding-right: 200px;
                padding-top: 150px;
                padding-bottom: 150px;
              }
              h1 {
                color: #555B6E;
              }
              #date{
                align-content : right;
              }
              .boxtitle{
                background-color : #FFFFFF;
                border-radius : 10px;
              }
              .boxactivity{
                background-color : #D5BDAF;
                border-radius : 10px;
              }
              .textheader{
                font-family: 'Times New Roman', Times, serif
              }
            `}</style>

    </div>

  );
}

export default test;