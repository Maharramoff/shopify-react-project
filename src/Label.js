import React, { useCallback, useState } from 'react';
import { Card, ChoiceList, Heading, Icon, Layout, OptionList, Page, Stack, Tag, TextContainer } from '@shopify/polaris'
import { useParams } from 'react-router-dom'
import { CancelSmallMinor } from '@shopify/polaris-icons'

const Label = () =>
{
    const [selected, setSelected] = useState([]);
    const { hashtag } = useParams();
    const handleChange = useCallback((value) => setSelected(value), []);

    const removeTag = (tag) =>
    {
        console.log(tag);
    }

    const tagsMarkup = (tagLabel) =>
    {
        tagLabel = titleCase(tagLabel);
        return (
          <Tag key={`option${tagLabel}`} onRemove={removeTag(tagLabel)} onClick={() => {}}>
              {tagLabel}
          </Tag>
        );
    };

    const titleCase = str =>
    {
        return str
          .toLowerCase()
          .split(' ')
          .map((word) => word.replace(word[0], word[0].toUpperCase()))
          .join('');
    }

    return (
      <Page fullWidth>
          <Layout>
              <Layout.Section oneThird>
                  <Card title={hashtag}>
                      <Card.Section>
                          <ChoiceList
                            allowMultiple
                            choices={[
                                {
                                    label: 'Use the shipping address as the billing address by default',
                                    value: 'shipping',
                                },
                                {
                                    label: 'Require a confirmation step',
                                    value: 'confirmation',
                                },
                            ]}
                            selected={selected}
                            onChange={handleChange}
                            title=""/>
                      </Card.Section>

                      <Card.Section subdued>
                          <Stack alignment="baseline">
                              {tagsMarkup('demo')}
                              {tagsMarkup('demo')}
                          </Stack>
                      </Card.Section>
                  </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                  <Card title={hashtag}>
                      <Card.Section>
                          <Stack>
                              <ChoiceList
                                allowMultiple
                                choices={[
                                    {
                                        label: 'Use the shipping address as the billing address by default',
                                        value: 'shipping',
                                    },
                                    {
                                        label: 'Require a confirmation step',
                                        value: 'confirmation',
                                    },
                                ]}
                                selected={selected}
                                onChange={handleChange}
                                title=""/>
                          </Stack>

                      </Card.Section>

                      <Card.Section subdued>
                          <Stack>
                              {tagsMarkup('demo')}
                              {tagsMarkup('demo')}
                          </Stack>
                      </Card.Section>
                  </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                  <Card title={hashtag}>
                      <Card.Section>
                          <Stack>
                              <ChoiceList
                                allowMultiple
                                choices={[
                                    {
                                        label: 'Use the shipping address as the billing address by default',
                                        value: 'shipping',
                                    },
                                    {
                                        label: 'Require a confirmation step',
                                        value: 'confirmation',
                                    },
                                ]}
                                selected={selected}
                                onChange={handleChange}
                                title=""/>
                          </Stack>

                      </Card.Section>

                      <Card.Section subdued>
                          <Stack>
                              {tagsMarkup('demo')}
                              {tagsMarkup('demo')}
                          </Stack>
                      </Card.Section>
                  </Card>
              </Layout.Section>
          </Layout>
      </Page>
    );
}

export default Label;