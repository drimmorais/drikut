import React from 'react'
import { MainGrid } from '../src/components/MainGrid'
import { Box } from '../src/components/Box';
import { DrikutMenu, OrkutNostalgicIconSet, DrikutProfileSidebarMenuDefault } from '../src/lib/DrikutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { MiniBox } from '../src/components/MiniBox';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

function ProfileSideBar(prop) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${prop.githubUser}.png`} style={{ borderRadius: '60px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${prop.githubUser}`}>@{prop.githubUser}</a>
        <hr />
      </p>
      <DrikutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">{props.title} ({props.items.length})</h2>
      {/* <ul>
        {seguidores.map((item) => {
          return (
            <li key={item}>
              <a href={`https://api.github.com/${item}.png`}>
                <img src={ } />
                <span>{item}</span>
              </a>
            </li>
          )
        })}
      </ul> */}
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home(props) {
  const githubUser = props.githubUser;
  const boxes = ['Friends da Comunidade', 'Comunidades']
  const favPeople = [{
    name: 'Rachel',
    user: 'https://g.co/kgs/hbVKwZ',
    url: 'https://1.bp.blogspot.com/-Q3u-d-t4Bps/WTWBnKD60nI/AAAAAAAAKps/G3ZP_eG_BHQmXBhSl3UNr7seTs65qOS7gCLcB/s640/f1cfe9c3de8c891b1f646c3a51973b15.jpg'
  },
  {
    name: 'Mônica',
    user: 'https://g.co/kgs/P3Kdbg',
    url: 'https://i.pinimg.com/474x/96/32/75/9632754507da638b7060124ba499ce8e.jpg'
  },
  {
    name: 'Phoebe',
    user: 'https://g.co/kgs/HikNru',
    url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-friends-lisa-kudrow.jpg'
  },
  {
    name: 'Joey',
    user: 'https://g.co/kgs/H1JZHW',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIeRwCr7hFlk0cDDPg8f0X-_XjMN_ZV891UY47byaZAjgpDZ_e96jXUenJEcZ_txWpAM&usqp=CAU'
  },
  {
    name: 'Chandler',
    user: 'https://g.co/kgs/6kpWDP',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMg-wOgO0iZsmZfQ7bAfVodKN_fbjEFHDyDr2ypabQsD8PNGhE7HOdEWMUl4F3qMTuG5U&usqp=CAU'
  },
  {
    name: 'Ross',
    user: 'https://g.co/kgs/WRWw1F',
    url: 'https://memegenerator.net/img/images/71597808.jpg'
  },
  ]
  const [comunidades, setCommunity] = React.useState([]);
  const [scraps, setScraps] = React.useState([]);
  const [seguidores, setSeguidores] = React.useState([]);
  const [following, setFollowing] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/followers`)
      .then((res) => {
        return res.json();
      })
      .then((resComplete) => {
        setSeguidores(resComplete);
      })

      fetch(`https://api.github.com/users/${githubUser}/following`)
      .then((res) => {
        return res.json();
      })
      .then((resComplete) => {
        setFollowing(resComplete);
      })

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '4fd91c42ca0f5628069a7cda152116',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "query": `query {
            allCommunities {
            id
            title
            imageurl
            creatorslug
          }}`})
    })
      .then((res) => res.json())
      .then((res) => {
        const comunidadesDato = res.data.allCommunities
        setCommunity(comunidadesDato)
      })

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '4fd91c42ca0f5628069a7cda152116',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "query": `query {
            allScraps{
              id
              scrap
              user
            }}`})
    })
      .then((res) => res.json())
      .then((res) => {
        const scrapsDato = res.data.allScraps
        setScraps(scrapsDato)
      })
  }, [])



  return (
    <>
      <DrikutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser}></ProfileSideBar>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Olá, {githubUser}</h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);

              const newCommunit = {
                imageurl: dadosDoForm.get('image'),
                creatorslug: githubUser,
                title: dadosDoForm.get('title'),
              }

              fetch('/api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCommunit)
              })
                .then(async (res) => {
                  const dados = await res.json();
                  console.log('Dados', dados)
                  const comunidade = dados.record;
                  setComunidades(...comunidades, comunidade)
                })
                .catch((e) => console.log('Erro ->', e))

              //setCommunity([...comunidades, newCommunit])
            }}>
              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title" aria-label="Qual vai ser o nome da sua comunidade?" />
              </div>
              <div>
                <input placeholder="Coloque uma URL para usar de capa"
                  name="image" aria-label="Coloque uma URL para usar de capa" />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>

          <Box>
            <h2 className="subTitle">Deixe um Scraps</h2>
  
            <form onSubmit={function handleCreateCommunity(e) {
              e.preventDefault();
              const dadosDoFormScrap = new FormData(e.target);

              const newScrap = {
                scrap: dadosDoFormScrap.get('scrap'),
                user: githubUser,
              }

              fetch('/api/scraps', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newScrap)
              })
                .then(async (res) => {
                  const dados = await res.json();
                  console.log('Dados', dados)
                  const scrapRecord = dados.record;
                  setScraps(...scraps, scrapRecord)
                })
                .catch((e) => console.log('Erro ->', e))
            }}>
              <div>
                <input placeholder="Deixe aqui o seu scrap!"
                  name="scrap" aria-label="Qual vai ser o nome da sua comunidade?" />
              </div>
              <button>
                Enviar scrap
              </button>
            </form>
          </Box>

          <Box>
            <h2 className="subTitle">Scraps</h2>
            <MiniBox>
              <ul>
                {scraps.map((item) => {
                  return (
                    <li>
                      <div className="card">
                        <img src={`https://github.com/${item.user}.png`} />
                        <span>{item.scrap}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </MiniBox>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle"> Seguidores ({seguidores.length})</h2>
            <ul>
              {seguidores.map((item) => {
                return (
                  <li>
                    <a href={item.html_url} key={item.id}>
                      <img src={item.avatar_url} />
                      <span>{item.login}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle"> Seguem você ({following.length})</h2>
            <ul>
              {following.map((item) => {
                return (
                  <li>
                    <a href={item.html_url} key={item.id}>
                      <img src={item.avatar_url} />
                      <span>{item.login}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
         
          {boxes.map((box) => {
            return (
              <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle"> {box} ({box === 'Friends da Comunidade' ? favPeople.length : comunidades.length})</h2>
                {box === 'Friends da Comunidade' ? <ul>
                  {favPeople.map((person) => {
                    return (
                      <li>
                        <a href={person.user} >
                          <img src={person.url} />
                          <span>{person.name}</span>
                        </a>
                      </li>

                    )
                  })}
                </ul> :
                  <ul>
                    {comunidades.map((item) => {
                      return (
                        <li>
                          <a href={`https://www.google.com/search?q=${item.title}`} key={item.id}>
                            <img src={item.imageurl} />
                            <span>{item.title}</span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                }

              </ProfileRelationsBoxWrapper>

            )
          })}
         
        </div>
      </MainGrid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token
    }
  })
    .then((resposta) => resposta.json())

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser
    },
  }
}
