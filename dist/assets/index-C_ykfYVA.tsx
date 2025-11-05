import ResearchProject from '@/components/ResearchProject'
const Shared = () => {
  return (
    <section id="behavior" className="max-w-7xl mx-auto mt-40">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-24">MOBILITY X</h2>

     <ResearchProject subSectionTitle="Modeling Fleet Size and Parking Needs for Shared Autonomous Vehicles"
                     subSectionText="How many autonomous vehicles and parking spaces are needed to meet future urban travel demand? This project develops an advanced agent-based simulation model (ABM) to estimate these requirements and examine how operational factors (such as reservation and waiting times) and demand-side characteristics (such as demand rate and the balance between trip origins and destinations) shape SAV system performance. By constructing various simulation scenarios based on historical taxi data from central areas of Chengdu, Shanghai, and Manhattan in New York City, the results reveal a general mechanism by which operational characteristics and demand patterns influence SAV fleet and parking sizes. A 1% increase in overall travel demand results in about a 1% increase in the number of SAVs needed and required parking spaces. Meanwhile, a 1% improvement in the balance of origin-destination (OD) trips, which reduces spatial mismatches between vehicle supply and trip requests, can help offset the need for additional vehicles and parking spaces in a city."
                     subSectionAnno={null}
                     subSectionImg="src/assets/images/ResearchArea/shared/fleet.webp"
                     cardList={[
                                {title:"Exploring influential factors of fleet and parking management in shared autonomous vehicle systems: An agent-based simulation framework",
                                      journal:"Transportation Research Part A: Policy and Practice (forthcoming)",
                                      imageFront:"src/assets/images/ResearchArea/shared/fleet_paper01_front.webp",
                                      imageBack:"src/assets/images/ResearchArea/shared/fleet_paper01_back.webp",
                                      link:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5008806",
                                      isESI:false

                                }
                              ]}
                      videoList={[
                                  
                      ]}
                      coverCard={{
                        coverImage: "src/assets/images/JournalCovers/TRA.jpg",
                        link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5008806"
                      }}
                      year={"2024 - 2026"}
                              />
    <ResearchProject subSectionTitle="Carsharing in China"
                     subSectionText="Carsharing is becoming increasingly integral to the transportation networks of modern cities. This research delves into how various urban elements and systemic factors affect the performance and adoption of carsharing systems throughout China. It explores the implications of China's rapid urban growth, focusing on the influence of city scale, economic indicators, public transit availability, and market competition on the dynamics of carsharing services. The expansion of these services has the potential to ease urban traffic and reduce pollution, offering critical perspectives for policymakers dedicated to advancing sustainable urban transport and expanding the sharing economy."
                     subSectionAnno="Collaborative Research (Lead PI: Xiaohu Zhang @ HKU)"
                     subSectionImg="src/assets/images/ResearchArea/shared/china.webp"
                     cardList={[
                                {title:"Carsharing in China: Impact of system and urban factors on usage and efficiency",
                                      journal:"Journal of Transport Geography",
                                      imageFront:"src/assets/images/ResearchArea/shared/china_paper01_front.webp",
                                      imageBack:"src/assets/images/ResearchArea/shared/china_paper01_back.webp",
                                      link:"https://doi.org/10.1016/j.jtrangeo.2024.103897",
                                      isESI:false

                                }
                              ]}
                      videoList={[
                                  
                      ]}
                      coverCard={{
                        coverImage: "src/assets/images/JournalCovers/JTG.webp",
                        link: "https://doi.org/10.1016/j.jtrangeo.2024.103897"
                      }}
                      year={"2024 - 2025"}
                              />



    



  </section>
  )
}

export default Shared;




