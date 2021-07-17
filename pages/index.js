import React from 'react'
import { MainGrid } from '../src/components/MainGrid'
import { Box } from '../src/components/Box';
import { DrikutMenu, OrkutNostalgicIconSet, DrikutProfileSidebarMenuDefault } from '../src/lib/DrikutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

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

export default function Home() {
  const githubUser = 'drimmorais';
  const boxes = ['Pessoas da Comunidade', 'Comunidades']
  const favPeople = [{
    name: 'Rachel',
    url: 'https://1.bp.blogspot.com/-Q3u-d-t4Bps/WTWBnKD60nI/AAAAAAAAKps/G3ZP_eG_BHQmXBhSl3UNr7seTs65qOS7gCLcB/s640/f1cfe9c3de8c891b1f646c3a51973b15.jpg'
  },
  {
    name: 'Mônica',
    url: 'https://i.pinimg.com/474x/96/32/75/9632754507da638b7060124ba499ce8e.jpg'
  },
  {
    name: 'Phoebe',
    url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-friends-lisa-kudrow.jpg'
  },
  {
    name: 'Joey',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIeRwCr7hFlk0cDDPg8f0X-_XjMN_ZV891UY47byaZAjgpDZ_e96jXUenJEcZ_txWpAM&usqp=CAU'
  },
  {
    name: 'Chandler',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMg-wOgO0iZsmZfQ7bAfVodKN_fbjEFHDyDr2ypabQsD8PNGhE7HOdEWMUl4F3qMTuG5U&usqp=CAU'
  },
  {
    name: 'Ross',
    url: 'https://memegenerator.net/img/images/71597808.jpg'
  },
  ]
  const [comunidades, setCommunity] = React.useState([{
    id: '1254411223645411232',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  },
  {
    id: '1254411223645411232',
    title: 'Deus me disse desce e arrasa',
    image: 'https://img10.orkut.br.com/community/15cf893f0e0d466dd42da2e37d04bde6.jpeg'
  },
  {
    id: '1254411223645411232',
    title: 'A cara do filho da Deise',
    image: 'https://i.ibb.co/4t3PJkK/download.jpg'
  }]);
  const [seguidores, setSeguidores] = React.useState([]);
  React.useEffect(() => {
    fetch('https://api.github.com/users/drimmorais/followers')
      .then((res) => {
        return res.json();
      })
      .then((resComplete) => {
        setSeguidores(resComplete);
      })
  }, [])
  console.log(seguidores)
  return (
    <>
      <DrikutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser}></ProfileSideBar>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);
              console.log(dadosDoForm.get('title'))
              console.log(dadosDoForm.get('image'))
              const newCommunit = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              setCommunity([...comunidades, newCommunit])
            }}>
              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title" aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text" />
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
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          {boxes.map((box) => {
            return (
              <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle"> {box} ({box === 'Pessoas da Comunidade' ? favPeople.length : comunidades.length})</h2>
                {box === 'Pessoas da Comunidade' ? <ul>
                  {favPeople.map((person) => {
                    return (
                      <li key={person}>
                        <a href={`/users/${person.name}`} >
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
                          <a href={`/users/${item.title}`} key={item.id}>
                            <img src={item.image} />
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
        </div>
      </MainGrid>
    </>
  )
}
