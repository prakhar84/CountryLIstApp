import React from "react";

function Dummy() {
  return (
    <>
      <div>
        {data.map((cntry) => (
          <Card style={{ width: "18rem" }}>
            <Row>
              <Col lg={4}>
                <Card.Img
                  variant="top"
                  src={cntry.flags.svg}
                  style={{
                    width: "90%",
                    height: "auto",
                    border: "1px solid black",
                  }}
                />
              </Col>
              <Col lg={8}>
                <Card.Body>
                  <Card.Title>{cntry.name.official}</Card.Title>
                  <Card.Text>
                    Currency :
                    {"currencies" in cntry
                      ? cntry.currencies[Object.keys(cntry.currencies)[0]].name
                      : "N/A"}
                  </Card.Text>
                  <ButtonGroup>
                    <Button
                      variant="primary"
                      onClick={() => showMap(cntry.maps.googleMaps)}
                    >
                      Show Map
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => details(cntry.cca3)}
                    >
                      Details
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Dummy;
