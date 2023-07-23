"use client";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const CardComponent = ({ name, megaLink, girlPhoto}) => (
    <div className="grid grid-cols-4">
     <div className="my-5">   
  <Card css={{ w: "20rem", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          New
        </Text>
        <Text h3 color="white">
          {/* {name} */}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={girlPhoto}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
        <p className="text-white text-[20px]">{name}</p>
          <Row justify="flex-end">
            <a flat auto rounded color="secondary" href={megaLink} target="_blank" className="border border-white rounded-md p-1 hover:bg-red-500">
              <p className="bold uppercase text-[12px]  hover:text-white text-white">
               Get Link
              </p>
            </a>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  </div>
  </div>
);

export default CardComponent;
