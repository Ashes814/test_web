
import ResearchProject from '@/components/ResearchProject'

const Behavior = () => {
  return (
    <section id="behavior" className="max-w-7xl mx-auto mt-40">
    <h2 className="text-2xl sm:text-5xl font-bold text-center mb-24">BEHAVIOR CHANGE & MODELLING</h2>

    <ResearchProject subSectionTitle="Impact of Covid-19 on people’s transit use behavior"
                     subSectionText="By analyzing a large-scale smart card dataset which captures visitors’ transit use behavior before and during Covid-19, we uncover the decrease in total transit ridership during the pandemic. Exploring individual transit use frequency, spatial diversity, and activity range, we find the decline in transit use at the individual level. Moreover, we develop a framework to detect individual transit use behavior change based on Bayesian Online Changepoint Detection (BOCD). The framework is capable of identifying occurrence time, direction, and persistency of changes in individual transit usage. The findings are beneficial for developing policies and interventions to facility daily travel and public transit operations."
                     subSectionAnno={null}
                     subSectionImg="src/assets/images/ResearchArea/behavior/transit.png"
                     cardList={[
                                {title:"Assessing effects of pandemic-related policies on individual public transit travel patterns: A Bayesian online changepoint detection based framework",
                                      journal:"Transportation Research Part A",
                                      imageFront:"src/assets/images/ResearchArea/behavior/transit_paper01_front.png",
                                      imageBack:"src/assets/images/ResearchArea/behavior/transit_paper01_back.png",
                                      link:"https://www.sciencedirect.com/science/article/abs/pii/S096585642400051X?via%3Dihub",
                                      isESI:false

                                }
                              ]}
                      videoList={[
                                  
                      ]}
                      coverCard={{
                        coverImage: "src/assets/images/JournalCovers/TRA.jpg",
                        link: "https://www.sciencedirect.com/science/article/abs/pii/S096585642400051X?via%3Dihub"
                      }}
                      year={"2023 - 2024"}
                              />

    <ResearchProject subSectionTitle="Impact of Covid-19 on Tourist Travel Behavior"
                     subSectionText="We analyze a large-scale LBS navigation dataset that captures travel activities of domestic inbound visitors in Jeju, Korea in the first nine months of 2020. A collection of regression models is introduced to quantify the dynamic effects of local and national COVID-19 indicators on their travel behavior. Results suggest that behavior of inbound travelers was jointly affected by pandemic severity locally and remotely. The impacts of the pandemic did not diminish over time but produced heterogeneous effects on travels with different trip purposes."
                     subSectionAnno={null}
                     subSectionImg="src/assets/images/ResearchArea/behavior/covid_behavior.webp"
                     cardList={[
                                {title:"Impact of the COVID-19 pandemic on travel behavior: A case study of domestic inbound travelers in Jeju, Korea",
                                      journal:"Tourism Management",
                                      imageFront:"src/assets/images/ResearchArea/behavior/covid_behavior_paper01_front.webp",
                                      imageBack:"src/assets/images/ResearchArea/behavior/covid_behavior_paper01_back.webp",
                                      link:"https://doi.org/10.1016/j.tourman.2022.104533",
                                      isESI:true

                                }
                              ]}
                      videoList={[
                                  
                      ]}
                      coverCard={{
                        coverImage: "src/assets/images/JournalCovers/TM.webp",
                        link: "https://www.sciencedirect.com/journal/tourism-management"
                      }}
                      year={"2021 - 2022"}
                              />




    



  </section>
  )
}


export default Behavior


