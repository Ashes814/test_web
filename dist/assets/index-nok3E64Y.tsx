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
                                      journal:"Transportation Research Part A: Policy and Practice",
                                      imageFront:"src/assets/images/ResearchArea/shared/fleet_paper01_front.webp",
                                      imageBack:"src/assets/images/ResearchArea/shared/fleet_paper01_back.webp",
                                      link:"https://apc01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0965856425003957&data=05%7C02%7Cyang.ls.xu%40polyu.edu.hk%7Ccb7130658c1f4dd091b808de26759e0c%7C8f37f760b1874981b82fe5dc6f5bcf44%7C0%7C0%7C638990483799658563%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=GMi1eLhNx8LITT0G85hpQ4Id4YKOU0L7LRG3S9onVQA%3D&reserved=0",
                                      isESI:false

                                }
                              ]}
                      videoList={[
                                  
                      ]}
                      coverCard={{
                        coverImage: "src/assets/images/JournalCovers/TRA.jpg",
                        link: "https://apc01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0965856425003957&data=05%7C02%7Cyang.ls.xu%40polyu.edu.hk%7Ccb7130658c1f4dd091b808de26759e0c%7C8f37f760b1874981b82fe5dc6f5bcf44%7C0%7C0%7C638990483799658563%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=GMi1eLhNx8LITT0G85hpQ4Id4YKOU0L7LRG3S9onVQA%3D&reserved=0"
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




