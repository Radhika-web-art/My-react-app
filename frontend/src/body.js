import styled, { css } from 'styled-components';
import './body.css';
import Pinkbar from "./left-pink.svg";
import Bluebar from "./right-blue.svg";
import VisitsVector from "./visits vector.png";
import Visits from "./industrial visit.jpg";
import Caf from "./caf.jpg";
import CafVector from "./caf vector.png";
import Mentorship from "./mentorship.jpg";
import Rightpink from "./right-pink.svg";
import AssistanceVector from "./assistance vector.png";
import CampVector from "./camps vector.png";
import Camps from "./camps.png";
import ConferenceVector from "./selection vector.png";
import Conference from "./conference.png";
import Line from "./timeline.png";
//import HomeVector from "./home vector.png";


function Body() {
    return (
      <div class="container-center-horizontal">
        <div className="frame-234 screen">
          <OverlapGroup>
            <IndustrialVisits>
              <OverlapGroup1>
                <Title>INDUSTRIAL VISITS</Title>
                <Rectangle394 src={Pinkbar} />
                <Text1>
                  Career Saathi Program also conducts industrial visits to the selected students. From these visits
                  students explore new things and learn various things. Till date CSP students visited various places like
                  Microsoft campus, T-Hub, Google, SEBI, AILA&amp;CONSTELLI and TEDx talks etc..
                </Text1>
                <ViewMore>View more&gt;&gt;</ViewMore>
                <CityscapesTown src={VisitsVector} />
              </OverlapGroup1>
              <ViewMore1>View more</ViewMore1>
            </IndustrialVisits>
            <Image48 src={Visits} />
            <Line1 src="https://anima-uploads.s3.amazonaws.com/projects/609a4ab758aa80813ef29783/releases/609fcbce8641b998163a4cfa/img/line-1@1x.svg" />
            <Frame231>
              <OverlapGroup2>
                <UilchartGrowth>
                  {/*<Vector src="" />*/}
                </UilchartGrowth>
                <Rectangle380 src={Caf} />
              </OverlapGroup2>
              <Frame2312>
              <OverlapGroup4>
                <X285Converted1 src={CafVector} />
                <Rectangle3801 src={Caf} />
              </OverlapGroup4>
              <Group126>
                <Rectangle3944 src={Bluebar} />
                <FlexCol3>
                  <Text6>CAREER ADVANCEMENT FUND</Text6>
                  <OverlapGroup13>
                    <Text4>
                      Career Advancement Fund is the finacial assistance to the selected students who are financially poor
                      and unable to pay their college/coaching fees. It would be provided based on their academic
                      performance and active participation in residential camps.
                    </Text4>
                    <ViewMore4>View more&gt;&gt;</ViewMore4>
                  </OverlapGroup13>
                </FlexCol3>
              </Group126>
            </Frame2312>
              <Group128>
                <Rectangle3941 src={Bluebar} />
                <FlexCol>
                  <Text2>CAREER GUIDANCE/MONITORING STUDENT’S GROWTH</Text2>
                  <OverlapGroup11>
                    <Text3>
                      CSP provides career guidance to the students who are in a confusion about their career. Career
                      Saathi Program Students are continously monitored and tracked by the cohort leads in academics and
                      in every activities.
                    </Text3>
                    <ViewMore2>View more&gt;&gt;</ViewMore2>
                  </OverlapGroup11>
                </FlexCol>
              </Group128>
            </Frame231>        
            <Frame2311>
              <Image47 src={Mentorship} />
              <Group127>
                <Rectangle3942 src={Bluebar} />
                <FlexCol1>
                  <MENTORSHIP>MENTORSHIP</MENTORSHIP>
                  <OverlapGroup12>
                    <Text4>
                      Career Saathi Program supports mentorship program. It is the one-to-one mentorship where every
                      student would be connected with individual mentor. The connected mentor teaches and guides the
                      students to their goal.
                    </Text4>
                    <ViewMore3>View more&gt;&gt;</ViewMore3>
                  </OverlapGroup12>
                </FlexCol1>
              </Group127>
            </Frame2311>
            <Frame230>
              <FlexCol2>
                <CAREERASSISTANCE>CAREER ASSISTANCE</CAREERASSISTANCE>
                <Text5>
                  Career Assistance would be provided to the selected students who really needs support. which includes
                  college admissions, hostels support, scholorships and relevant entrance exam coaching. it would be
                  provided based on their active participation in academic and camp activities.
                </Text5>
              </FlexCol2>
              <Rectangle3943 src={Rightpink} />
              <OverlapGroup3>
                <X272Converted1 src={AssistanceVector} />
                <Image25 src={Caf} />
              </OverlapGroup3>
            </Frame230>
            <Frame2312>
              <OverlapGroup4>
                <X285Converted1 src={CafVector} />
                <Rectangle3801 src={Caf} />
              </OverlapGroup4>
              <Group126>
                <Rectangle3944 src={Bluebar} />
                <FlexCol3>
                  <Text6>CAREER ADVANCEMENT FUND</Text6>
                  <OverlapGroup13>
                    <Text4>
                      Career Advancement Fund is the finacial assistance to the selected students who are financially poor
                      and unable to pay their college/coaching fees. It would be provided based on their academic
                      performance and active participation in residential camps.
                    </Text4>
                    <ViewMore4>View more&gt;&gt;</ViewMore4>
                  </OverlapGroup13>
                </FlexCol3>
              </Group126>
            </Frame2312>
            <ResidentialCamps>
              <OverlapGroup6>
                <ResidentialCampsText>
                  <RESIDENTIALCAMPS>RESIDENTIAL CAMPS</RESIDENTIALCAMPS>
                  <Text8>
                    Career Saathi Program conducts residential camps for selected students once in every six months.
                    Various skill development programs like time management, motivational and skill enhacement sessions
                    would be conducted in that. 10 residential camps were conducted till date.
                  </Text8>
                  <ViewMore5>View more&gt;&gt;</ViewMore5>
                </ResidentialCampsText>
                <X472Converted1 src={CampVector} />
              </OverlapGroup6>
              <Rectangle3945 src={Rightpink} />
              <OverlapGroup5>
                <Ellipse7></Ellipse7>
                <Group129>
                  <OverlapGroup14>
                    <Ellipse10></Ellipse10>
                    <Ellipse9></Ellipse9>
                    <Ellipse8></Ellipse8>
                  </OverlapGroup14>
                </Group129>
                <Image49 src={Camps} />
              </OverlapGroup5>
            </ResidentialCamps>
            <Frame2313>
              <OverlapGroup7>
                <Image45 src={Conference} />
              </OverlapGroup7>
              <Group124>
                <Rectangle3944 src={Bluebar} />
                <OverlapGroup15>
                  <Text9>
                    Career Saathi Program conducts selection conference to the select the meritorious yet underprivilized
                    students from governament schools every year after completion of their tenth standard. They conducts
                    written test, group discussion and interviews for selection.
                  </Text9>
                  <Text10 href="#">Attend our next selection Campaign&gt;&gt;</Text10>
                  <Text11>SELECTION CONFERENCE</Text11>
                  <Text11>SELECTION CONFERENCE</Text11>
                </OverlapGroup15>
              </Group124>
            </Frame2313>
            <X417847PDY2TS1911 src={ConferenceVector} />
          </OverlapGroup>
          <ViewMore6>View more&gt;&gt;</ViewMore6>
        </div>
        
      </div>
    );
  }
  
  export default Body;
  const OverlapGroup = styled.div`
    position: absolute;
    width: 1625px;
    height: 3841px;
    top: -168px;
    left: 0;
  `;
  
  export const IndustrialVisits = styled.div`
    position: absolute;
    height: 364px;
    top: 2870px;
    left: 26px;
    display: flex;
    align-items: flex-start;
    min-width: 1599px;
    mix-blend-mode: normal;
  `;
  
  export const OverlapGroup1 = styled.div`
    width: 1088px;
    height: 573px;
    position: relative;
    margin-left: -296px;
    margin-top: -220px;
  `;
  
  export const Title = styled.h1`
  color: var(--blue-zodiac);
  font-family: var(--font-family-merriweather-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;

    position: absolute;
    width: 627px;
    top: 254px;
    left: 461px;
    mix-blend-mode: normal;
    letter-spacing: 3.36px;
    line-height: 33.2px;
  `;
  
  export const Rectangle394 = styled.img`
    position: absolute;
    width: 87px;
    height: 17px;
    top: 269px;
    left: 810px;
    mix-blend-mode: normal;
  `;
  
  export const Text1 = styled.div`
  color: var(--nepal);
  font-family: var(--font-family-lato-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    position: absolute;
    width: 455px;
    top: 319px;
    left: 321px;
    mix-blend-mode: normal;
    text-align: right;
    letter-spacing: 1.89px;
    line-height: 28.4px;
  `;
  
  export const ViewMore = styled.div`
  color: var(--black);
  font-family: var(--font-family-merriweather-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    position: absolute;
    width: 455px;
    top: 538px;
    left: 616px;
    mix-blend-mode: normal;
    text-align: justify;
    letter-spacing: 1.89px;
    line-height: 33px;
    text-decoration: underline;
    white-space: nowrap;
  `;
  
  export const CityscapesTown = styled.img`
    position: absolute;
    width: 462px;
    height: 360px;
    top: 0;
    left: 0;
    mix-blend-mode: normal;
  `;
  
  export const ViewMore1 = styled.div`
    min-height: 25px;
    align-self: flex-end;
    margin-left: 137px;
    margin-bottom: 16px;
    min-width: 121px;
    mix-blend-mode: normal;
    font-family: var(--font-family-poppins-bold);
    font-weight: 700;
    color: var(--zircon-2);
    font-size: var(--font-size-xs);
    letter-spacing: 2.52px;
    line-height: 24.9px;
    white-space: nowrap;
  `;
  
  export const Image48 = styled.img`
    position: absolute;
    width: 590px;
    height: 300px;
    top: 2919px;
    left: 740px;
    mix-blend-mode: normal;
    object-fit: cover;
  `;
  
  export const Line1 = styled.img`
    position: absolute;
    width: 2px;
    height: 3555px;
    top: 286px;
    left: 624px;
  `;
  
  export const Frame231 = styled.div`
    position: absolute;
    height: 364px;
    top: 3398px;
    left: -13px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 1197px;
    mix-blend-mode: normal;
  `;
  
  export const OverlapGroup2 = styled.div`
    width: 489px;
    height: 305px;
    position: relative;
    margin-top: 8px;
  `;
  
  export const UilchartGrowth = styled.div`
    position: absolute;
    width: 147px;
    height: 129px;
    top: 176px;
    left: 0;
    display: flex;
    padding: 0 12px;
    align-items: center;
    mix-blend-mode: normal;
  `;
  
  export const Vector = styled.img`
    width: 123px;
    height: 109px;
    mix-blend-mode: normal;
  `;
  
  export const Rectangle380 = styled.img`
    position: absolute;
    width: 386px;
    height: 300px;
    top: 0;
    left: 104px;
    mix-blend-mode: normal;
    object-fit: cover;
  `;
  
  export const Group128 = styled.div`
    height: 351px;
    margin-left: 109px;
    display: flex;
    align-items: flex-start;
    min-width: 711px;
  `;
  
  export const Rectangle3941 = styled.img`
    width: 92px;
    height: 17px;
    margin-top: 8px;
    mix-blend-mode: normal;
  `;
  
  export const FlexCol = styled.div`
    width: 568px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 351px;
    margin-left: 47px;
  `;
  
  export const Text2 = styled.div`
  color: var(--blue-zodiac);
  font-family: var(--font-family-merriweather-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;

    width: 568px;
    min-height: 64px;
    margin-left: 0.1px;
    mix-blend-mode: normal;
    letter-spacing: 3.36px;
    line-height: 33.2px;
  `;
  
  export const OverlapGroup11 = styled.div`
    width: 479px;
    height: 247px;
    position: relative;
    margin-top: 40px;
  `;
  
  export const Text3 = styled.div`
  color: var(--nepal);
  font-family: var(--font-family-lato-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    position: absolute;
    width: 479px;
    top: 0;
    left: 0;
    mix-blend-mode: normal;
    letter-spacing: 1.89px;
    line-height: 28.4px;
  `;
  
  export const ViewMore2 = styled.div`
  color: var(--black);
  font-family: var(--font-family-merriweather-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    position: absolute;
    width: 479px;
    top: 212px;
    left: 0;
    mix-blend-mode: normal;
    text-align: justify;
    letter-spacing: 1.89px;
    line-height: 33px;
    text-decoration: underline;
    white-space: nowrap;
  `;
  
  export const Frame2311 = styled.div`
    position: absolute;
    height: 364px;
    top: 2393px;
    left: 32px;
    display: flex;
    padding: 0 32px;
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 1197px;
    mix-blend-mode: normal;
  `;
  
  export const Image47 = styled.img`
    width: 386px;
    height: 230px;
    margin-top: 14px;
    mix-blend-mode: normal;
    object-fit: cover;
  `;
  
  export const Group127 = styled.div`
    height: 300px;
    margin-left: 144px;
    display: flex;
    align-items: flex-start;
    min-width: 572px;
  `;
  
  export const Rectangle3942 = styled.img`
    width: 87px;
    height: 17px;
    margin-top: 6px;
    mix-blend-mode: normal;
  `;
  
  export const FlexCol1 = styled.div`
    width: 455px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 300px;
    margin-left: 26px;
  `;
  
  export const MENTORSHIP = styled.div`
  color: var(--blue-zodiac);
  font-family: var(--font-family-merriweather-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;

    width: 388px;
    min-height: 64px;
    mix-blend-mode: normal;
    letter-spacing: 3.36px;
    line-height: 33.2px;
  `;
  
  export const OverlapGroup12 = styled.div`
    width: 455px;
    height: 236px;
    position: relative;
  `;
  
  export const Text4 = styled.div`
  color: var(--nepal);
  font-family: var(--font-family-lato-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    position: absolute;
    width: 455px;
    top: 0;
    left: 0;
    mix-blend-mode: normal;
    letter-spacing: 1.89px;
    line-height: 28.4px;
  `;
  
  export const ViewMore3 = styled.div`
  color: var(--black);
  font-family: var(--font-family-merriweather-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    position: absolute;
    width: 455px;
    top: 180px;
    left: 0;
    mix-blend-mode: normal;
    text-align: justify;
    letter-spacing: 1.89px;
    line-height: 33px;
    text-decoration: underline;
    white-space: nowrap;
  `;
  
  export const Frame230 = styled.div`
    position: absolute;
    height: 364px;
    top: 1842px;
    left: 45px;
    display: flex;
    padding: 13px 24px;
    align-items: flex-end;
    min-width: 1599px;
    mix-blend-mode: normal;
  `;
  
  export const FlexCol2 = styled.div`
    width: 417px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 309px;
  `;
  
  export const CAREERASSISTANCE = styled.div`
  color: var(--blue-zodiac);
  font-family: var(--font-family-merriweather-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;

    width: 345px;
    min-height: 64px;
    align-self: flex-end;
    min-width: 345px;
    mix-blend-mode: normal;
    text-align: right;
    letter-spacing: 3.36px;
    line-height: 33.2px;
  `;
  
  export const Text5 = styled.div`
  color: var(--nepal);
  font-family: var(--font-family-lato-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    width: 412px;
    min-height: 236px;
    margin-top: 9px;
    min-width: 412px;
    mix-blend-mode: normal;
    text-align: right;
    letter-spacing: 1.89px;
    line-height: 28.4px;
  `;
  
  export const Rectangle3943 = styled.img`
    width: 87px;
    height: 17px;
    align-self: flex-start;
    margin-left: 54px;
    margin-top: 36px;
    mix-blend-mode: normal;
  `;
  
  export const OverlapGroup3 = styled.div`
    width: 609px;
    height: 300px;
    position: relative;
    margin-left: 110px;
    margin-bottom: 2px;
  `;
  
  export const X272Converted1 = styled.img`
    position: absolute;
    width: 341px;
    height: 126px;
    top: 172px;
    left: 268px;
    mix-blend-mode: normal;
    object-fit: cover;
  `;
  
  export const Image25 = styled.img`
    position: absolute;
    width: 388px;
    height: 300px;
    top: 0;
    left: 0;
    mix-blend-mode: normal;
    object-fit: cover;
  `;
  
  export const Frame2312 = styled.div`
    position: absolute;
    height: 364px;
    top: 1385px;
    left: 32px;
    display: flex;
    align-items: flex-start;
    min-width: 1197px;
    mix-blend-mode: normal;
  `;
  
  export const OverlapGroup4 = styled.div`
    width: 625px;
    height: 330px;
    position: relative;
    margin-left: -162px;
    margin-top: 8px;
  `;
  
  export const X285Converted1 = styled.img`
    position: absolute;
    width: 438px;
    height: 155px;
    top: 175px;
    left: 0;
    mix-blend-mode: normal;
    object-fit: cover;
  `;
  
  export const Rectangle3801 = styled.img`
    position: absolute;
    width: 386px;
    height: 301px;
    top: 0;
    left: 239px;
    mix-blend-mode: normal;
    object-fit: cover;
  `;
  
  export const Group126 = styled.div`
    height: 324px;
    margin-left: 130px;
    display: flex;
    align-items: flex-start;
    min-width: 572px;
  `;
  
  export const Rectangle3944 = styled.img`
    width: 87px;
    height: 17px;
    margin-top: 8px;
    mix-blend-mode: normal;
  `;
  
  export const FlexCol3 = styled.div`
    width: 455px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 324px;
    margin-left: 26px;
  `;
  
  export const Text6 = styled.div`
  color: var(--blue-zodiac);
  font-family: var(--font-family-merriweather-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;

    min-height: 36px;
    mix-blend-mode: normal;
    letter-spacing: 3.36px;
    line-height: 33.2px;
    white-space: nowrap;
  `;
  
  export const OverlapGroup13 = styled.div`
    width: 455px;
    height: 260px;
    position: relative;
    margin-top: 28px;
  `;
  
  export const ViewMore4 = styled.div`
  color: var(--blue-zodiac);
  font-family: var(--font-family-merriweather-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    position: absolute;
    width: 455px;
    top: 225px;
    left: 0;
    mix-blend-mode: normal;
    text-align: justify;
    letter-spacing: 1.89px;
    line-height: 33px;
    text-decoration: underline;
    white-space: nowrap;
  `;
  
  export const ResidentialCamps = styled.div`
    position: absolute;
    height: 364px;
    top: 770px;
    left: 32px;
    display: flex;
    align-items: flex-start;
    min-width: 1197px;
  `;
  
  export const OverlapGroup6 = styled.div`
    width: 603px;
    height: 497px;
    position: relative;
    margin-left: -134px;
    margin-top: -100px;
  `;
  
  export const ResidentialCampsText = styled.div`
    position: absolute;
    width: 459px;
    top: 162px;
    left: 144px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-height: 335px;
  `;
  
  export const RESIDENTIALCAMPS = styled.div`
  color: var(--blue-zodiac);
  font-family: var(--font-family-merriweather-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;

    width: 414px;
    min-height: 64px;
    margin-right: 4px;
    min-width: 414px;
    mix-blend-mode: normal;
    text-align: right;
    letter-spacing: 3.36px;
    line-height: 33.2px;
  `;
  
  export const Text8 = styled.div`
  color: var(--nepal);
  font-family: var(--font-family-lato-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    width: 455px;
    min-height: 236px;
    margin-right: 4px;
    min-width: 455px;
    mix-blend-mode: normal;
    text-align: right;
    letter-spacing: 1.89px;
    line-height: 28.4px;
  `;
  
  export const ViewMore5 = styled.div`
  color: var(--blue-zodiac);
  font-family: var(--font-family-merriweather-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    width: 414px;
    min-height: 35px;
    margin-right: 4px;
    min-width: 414px;
    mix-blend-mode: normal;
    text-align: right;
    letter-spacing: 1.89px;
    line-height: 33px;
    text-decoration: underline;
    white-space: nowrap;
  `;
  
  export const X472Converted1 = styled.img`
    position: absolute;
    width: 505px;
    height: 237px;
    top: 0;
    left: 0;
    mix-blend-mode: normal;
  `;
  
  export const Rectangle3945 = styled.img`
    width: 77px;
    height: 17px;
    margin-left: 49px;
    margin-top: 70px;
    mix-blend-mode: normal;
  `;
  
  export const OverlapGroup5 = styled.div`
    width: 537px;
    height: 443px;
    position: relative;
    align-self: flex-end;
    margin-left: 55px;
    margin-bottom: -91px;
  `;
  
  export const Ellipse7 = styled.div`
    position: absolute;
    width: 133px;
    height: 133px;
    top: 0;
    left: 404px;
    background-color: var(--cerise);
    border-radius: 66.5px;
    mix-blend-mode: normal;
  `;
  
  export const Group129 = styled.div`
    position: absolute;
    height: 133px;
    top: 310px;
    left: 0;
    display: flex;
    align-items: flex-start;
    min-width: 133px;
  `;
  
  export const OverlapGroup14 = styled.div`
    width: 133px;
    height: 133px;
    position: relative;
    border-radius: 66.5px;
  `;
  
  export const Ellipse10 = styled.div`
  border: 10px solid var(--azure-radiance);

    position: absolute;
    width: 33px;
    height: 33px;
    top: 49px;
    left: 50px;
    border-radius: 16.5px;
  `;
  
  export const Ellipse9 = styled.div`
  border: 10px solid var(--azure-radiance);

    position: absolute;
    width: 76px;
    height: 76px;
    top: 29px;
    left: 27px;
    border-radius: 38px;
  `;
  
  export const Ellipse8 = styled.div`
  border: 10px solid var(--azure-radiance);

    position: absolute;
    width: 133px;
    height: 133px;
    top: 0;
    left: 0;
    border-radius: 66.5px;
  `;
  
  export const Image49 = styled.img`
    position: absolute;
    width: 430px;
    height: 334px;
    top: 58px;
    left: 50px;
    mix-blend-mode: normal;
    object-fit: cover;
  `;
  
  export const Frame2313 = styled.div`
    position: absolute;
    height: 364px;
    top: 270px;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 1197px;
    mix-blend-mode: normal;
  `;
  
  export const OverlapGroup7 = styled.div`
    height: 418px;
    margin-top: -65px;
    display: flex;
    padding: 45px 51.3px;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 517px;
    background-image: url(https://anima-uploads.s3.amazonaws.com/projects/609a4ab758aa80813ef29783/releases/609fda858641b998163a4d42/img/group-125@1x.jpg);
    background-size: 100% 100%;
  `;
  
  export const Image45 = styled.img`
    width: 365px;
    height: 300px;
    mix-blend-mode: normal;
    object-fit: cover;
  `;
  
  export const Group124 = styled.div`
    margin-left: 89px;
    margin-top: 8px;
    display: flex;
    align-items: flex-start;
    min-width: 607px;
  `;
  
  export const OverlapGroup15 = styled.div`
    width: 488px;
    height: 309px;
    position: relative;
    margin-left: 26px;
  `;
  
  export const Text9 = styled.div`
  color: var(--nepal);
  font-family: var(--font-family-lato-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    position: absolute;
    width: 455px;
    top: 54px;
    left: 0;
    mix-blend-mode: normal;
    letter-spacing: 1.89px;
    line-height: 28.4px;
  `;
  
  export const Text10 = styled.div`
  color: var(--blue-zodiac);
  font-family: var(--font-family-merriweather-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    position: absolute;
    width: 488px;
    top: 274px;
    left: 0;
    mix-blend-mode: normal;
    text-align: justify;
    letter-spacing: 1.89px;
    line-height: 33px;
    text-decoration: underline;
    white-space: nowrap;
  `;
  
  export const Text11 = styled.div`
  color: var(--blue-zodiac);
  font-family: var(--font-family-merriweather-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;

    position: absolute;
    width: 388px;
    top: 0;
    left: 0;
    mix-blend-mode: normal;
    letter-spacing: 3.36px;
    line-height: 33.2px;
  `;
  
  export const X417847PDY2TS1911 = styled.img`
    position: absolute;
    width: 433px;
    height: 377px;
    top: 0;
    left: 951px;
    mix-blend-mode: normal;
    object-fit: cover;
  `;
  
  export const ViewMore6 = styled.div`
  color: var(--black);
  font-family: var(--font-family-merriweather-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;

    position: absolute;
    width: 340px;
    top: 2038px;
    left: 141px;
    mix-blend-mode: normal;
    text-align: right;
    letter-spacing: 1.89px;
    line-height: 33px;
    text-decoration: underline;
    white-space: nowrap;
  `;
  
  export const MerriweatherBoldBlueZodiac24px = css`
    color: var(--blue-zodiac);
    font-family: var(--font-family-merriweather-bold);
    font-size: var(--font-size-l);
    font-weight: 700;
    font-style: normal;
  `;
  
  export const LatoRegularNormalNepal21px = css`
    color: var(--nepal);
    font-family: var(--font-family-lato-regular);
    font-size: var(--font-size-m);
    font-weight: 400;
    font-style: normal;
  `;
  
  export const MerriweatherRegularNormalBlack21px = css`
    color: var(--black);
    font-family: var(--font-family-merriweather-regular);
    font-size: var(--font-size-m);
    font-weight: 400;
    font-style: normal;
  `;
  
  export const MerriweatherRegularNormalBlueZodiac = css`
    color: var(--blue-zodiac);
    font-family: var(--font-family-merriweather-regular);
    font-size: var(--font-size-m);
    font-weight: 400;
    font-style: normal;
  `;
  
  export const Border10pxAzureRadiance = css`
    border: 10px solid var(--azure-radiance);
  `;


  