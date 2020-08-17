import React, { Component } from 'react';
import { Card, List, Page, Stack } from '@shopify/polaris'

class Label extends Component
{
    render()
    {
        let hashtag = this.props.match.params.hashtag;

        return (
          <Page>
              <Stack distribution="fill">
                  <Card title={hashtag} sectioned>
                      <List>
                          <List.Item>Felix Crafford</List.Item>
                          <List.Item>Ezequiel Manno</List.Item>
                      </List>
                  </Card>
                  <Card title={hashtag} sectioned>
                      <List>
                          <List.Item>Felix Crafford</List.Item>
                          <List.Item>Ezequiel Manno</List.Item>
                      </List>
                  </Card>
                  <Card title={hashtag} sectioned>
                      <List>
                          <List.Item>Felix Crafford</List.Item>
                          <List.Item>Ezequiel Manno</List.Item>
                      </List>
                  </Card>
                  <Card title={hashtag} sectioned>
                      <List>
                          <List.Item>Felix Crafford</List.Item>
                          <List.Item>Ezequiel Manno</List.Item>
                      </List>
                  </Card>
              </Stack>
          </Page>
        );
    }
}

export default Label;