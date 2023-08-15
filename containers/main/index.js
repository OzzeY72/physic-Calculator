import React from 'react';
import { Button, Col, Container, Grid, Input, Item, Row, Text } from "native-base";
import { styles } from "./styles";

const funcName = (value) => `on${isNaN(parseInt(value)) ? value : 'Tap'}`;

export const MainPageView = ({ scope, buttons }) => {
  const { highlight, calculation, result, border} = scope.state;
  return (
    <Container style={styles.container}>
      <Grid>
        <Row style={styles.head.base}>
          <Col style={styles.head.text.base}>
            <Item regular style={styles.head.text.base.first} disabled>
              <Input style={[border ? styles.border : highlight ? styles.shadow_text : styles.base_text ]} value={calculation || '0'} disabled/>
            </Item>
            <Item regular style={styles.head.text.base.second} disabled>
              <Input style={[border ? styles.border : !highlight ? styles.shadow_text : styles.base_text]} value={result} disabled />
            </Item>
          </Col>
        </Row>
        <Row style={styles.content.base}>
          <Col>
            {
              buttons.map((row, i) => (
                <Row key={i}>
                  {
                    row.map(({warning, dark, light, value, title}, index) => ( 
                      <Col key={index}>
                        <Button transparent
                          onPress={() => scope[funcName(value)](value)}
                          style={styles.button}
                          block
                          warning={warning}
                          dark={dark}
                          light={light}
                        >
                          <Text style={styles.button.text}>{title}</Text>
                        </Button>
                      </Col>
                    ))
                  }
                </Row>
              ))
            }
          </Col>
        </Row>
      </Grid>
    </Container>
  )
};