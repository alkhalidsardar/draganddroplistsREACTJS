import { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { ReactSortable } from 'react-sortablejs';
import BatmanImage from './Batman.jpg';
import GojoImage from './Gojo.jpg';
import FlochImage from './Floch.jpg';
import SaulImage from './saul.jpg'
import "./App.css"

const Card =styled.div`
position: relative;
overflow: hidden;
width: 300px;
border-radius: 1rem;
background: white;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
cursor: pointer;
`;

const Item = styled.div`
display: flex;
align-items: center;
padding: 1rem 2rem 1rem 1rem;
transition: background-color 0.3s; // Add a transition for smooth color change
&:hover {
  background-color: #e8dcff; // Change to the desired hover background color
}
`;

const ItemImage = styled.div`
  width: 44px;
  height: 44px;
  padding: 2px;
  margin-right: 0.75rem;
 
`;

const ItemTitle = styled.div`
font-size: 0.875rem;
font-family: 'Poppins', sans-serif;
font-weight: 700;
color: ${rgba("black" , 0.75)};
`;

const ItemSubtitle = styled.div`
color: ${rgba("black" , 0.50)};
font-size: 0.75rem;
font-family: 'Inter', sans-serif;
`;

const Itemlikes = styled.div`
display: flex;
align-items: center;
color: ${rgba("black" , 0.38)};
font-size: 0.75rem;
font-family: 'Inter', sans-serif;
& > i {
    margin-right: 0.25rem;
    font-size: 1rem;
    color: #8359d0;
}`;

export default function List(){

    const [state, setState] = useState([
        { id: 1, title: "Batman", subtitle: "knight", likes: 165 },
        { id: 2, title: "Gojo", subtitle: "sorcerer", likes: 406 },
        { id: 3, title: "Floch", subtitle: "king", likes: 767 },
        { id: 4, title: "Saul", subtitle: "lawyer", likes: 200 },
      ]);
      
      //  object to map titles to their respective images
const titleToImage = {
    Batman: BatmanImage,
    Gojo: GojoImage,
    Floch: FlochImage,
    Saul: SaulImage,
  };


return(
    <Card>

<ReactSortable list={state} setList={setState}>
 {
    state.map(
        item => (
            <Item key ={item.id}>
                  <ItemImage>
              <img
                src={titleToImage[item.title]}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10%',
                }}
              />
            </ItemImage>
            <div style={{flex: 1}}>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemSubtitle>{item.subtitle}</ItemSubtitle>
            </div>
            <Itemlikes>
                <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"></path></svg></i>
                <span>{item.likes}</span>
            </Itemlikes>
                </Item>
        ))}
</ReactSortable>
    </Card>
)
};