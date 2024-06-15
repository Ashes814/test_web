import ResearchProject from '@/components/ResearchProject'

const Sensing = () => {
  return (
    <section id="sensing" className="max-w-7xl mx-auto mt-40">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-24">MOBILITY SENSING & ANALYTICS</h2>

      <ResearchProject subSectionTitle="Human Mobility and Socioeconomic Status"
                       subSectionText="This study leverages large-scale cellphone data combined with socioeconomic data from Singapore and Boston to extract six widely recognized mobility indicators and conducts a thorough analysis of how these indicators correlate with the estimated socioeconomic status (SES) of cellphone users. The research uncovers two key insights: firstly, the relationship between movement radius and SES varies across different urban environments; secondly, there is no significant correlation between the diversity of an individual's mobility and their SES. These findings, which have been widely confirmed by subsequent studies, underscore the complex interplay between human mobility patterns and socioeconomic characteristics."
                       subSectionAnno={null}
                       subSectionImg="src/assets/images/ResearchArea/sensing/human_mobility.png"
                       cardList={[
                                  {title:"Human mobility and socioeconomic status: Analysis of Singapore and Boston",
                                        journal:"Computers, Environment and Urban Systems",
                                        imageFront:"src/assets/images/ResearchArea/sensing/human_mobility_paper01_front.png",
                                        imageBack:"src/assets/images/JournalCovers/CEUS.jpg",
                                        link:"https://www.sciencedirect.com/science/article/pii/S0198971517304179",
                                        isESI: true
                                  }
                                ]}
                        videoList={[
                                    {
                                      year:2021,
                                      title:"Editor’s Choice\n(in Chinese)",
                                      imageFront:"src/assets/images/ResearchArea/sensing/human_mobility_media.png",
                                      youTubeLink:"https://mp.weixin.qq.com/s/CQ0OYsqlaq6tyWEmhoNE1g",
                                      bilibiliLink:"",
                                      tencentLink:"",
                                      type:"media",
                                      text:"主编推荐 | 手机大数据揭示人群移动模式与社会经济属性之间的关系"
                                    }
                        ]}
                        coverCard={null}
                        year={"2017 - 2021"}
                                />


      <ResearchProject subSectionTitle="Characterizing Human Mobility Using Cellphone Big Data"
                       subSectionText="This project represents a multi-year endeavor to innovate methods for delineating human mobility patterns through the analysis of various forms of cellphone big data, including Call Detail Records (CDRs) and mobile signaling data. The outcomes of this research offer a comprehensive perspective on individual mobility traits, encompassing the utilization of urban spaces, pinpointing activity locations, and understanding movement dynamics. Additionally, the project delves into the various manifestations of location uncertainty inherent in cellphone data, evaluates their influence on mobility characterization, and formulates algorithms to mitigate these challenges."
                       subSectionAnno={null}
                       subSectionImg="src/assets/images/ResearchArea/sensing/cellphone.png"
                       cardList={[
                                  {title:"Understanding aggregate human mobility patterns using passive mobile phone location data: a home-based approach",
                                        journal:"Transportation",
                                        imageFront:"src/assets/images/ResearchArea/sensing/cellphone_paper01_front.png",
                                        imageBack:"src/assets/images/JournalCovers/T.jpg",
                                        link:"http://link.springer.com/article/10.1007/s11116-015-9597-y",
                                        isESI:false
                                  },
                                  {title:"Another tale of two cities: Understanding human activity space using actively tracked cellphone location data",
                                        journal:"Annals of the American Association of Geographers",
                                        imageFront:"src/assets/images/ResearchArea/sensing/cellphone_paper02_front.png",
                                        imageBack:"src/assets/images/JournalCovers/AAG.jpg",
                                        link:"http://www.tandfonline.com/doi/abs/10.1080/00045608.2015.1120147?journalCode=raag21",
                                        isESI:false
                                  },
                                  {title:"Effects of data preprocessing methods on addressing location uncertainty in mobile signaling data",
                                        journal:"Annals of the American Association of Geographers",
                                        imageFront:"src/assets/images/ResearchArea/sensing/cellphone_paper03_front.png",
                                        imageBack:"src/assets/images/JournalCovers/AAG.jpg",
                                        link:"https://www.tandfonline.com/doi/full/10.1080/24694452.2020.1773232",
                                        isESI:false
                                  },
                                  {title:"Modeling activity spaces using big geo‐data: Progress and challenges",
                                        journal:"Geography Compass",
                                        imageFront:"src/assets/images/ResearchArea/sensing/cellphone_paper04_front.png",
                                        imageBack:"src/assets/images/JournalCovers/GC.jpg",
                                        link:"https://doi.org/10.1111/gec3.12663",
                                        isESI:false
                                  }
                                ]}
                        videoList={[
                        ]}
                        coverCard={null}
                        year={"2015 - 2022"}
                                />



      



    </section>
  )
}

export default Sensing
