import React, { useCallback, useState } from 'react';
import { ActionList, Card, Frame, Icon, TopBar, VisuallyHidden } from '@shopify/polaris';
import { ArrowLeftMinor, QuestionMarkMajorTwotone } from '@shopify/polaris-icons';

const AppTopBar = () =>
{
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const toggleIsUserMenuOpen = useCallback(
      () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
      [],
    );

    const toggleIsSecondaryMenuOpen = useCallback(
      () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
      [],
    );

    const handleSearchResultsDismiss = useCallback(() =>
    {
        setIsSearchActive(false);
        setSearchValue('');
    }, []);

    const handleSearchChange = useCallback((value) =>
    {
        setSearchValue(value);
        setIsSearchActive(value.length > 0);
    }, []);

    const handleNavigationToggle = useCallback(() =>
    {
        console.log('toggle navigation visibility');
    }, []);



    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={[
            {
                items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }],
            },
            {
                items: [{ content: 'Community forums' }],
            },
        ]}
        name="Dharma"
        detail="Jaded Pixel"
        initials="D"
        open={isUserMenuOpen}
        onToggle={toggleIsUserMenuOpen}
      />
    );

    const searchResultsMarkup = (
      <Card>
          <ActionList
            items={[
                { content: 'Shopify help center' },
                { content: 'Community forums' },
            ]}
          />
      </Card>
    );

    const searchFieldMarkup = (
      <TopBar.SearchField
        onChange={handleSearchChange}
        value={searchValue}
        placeholder="Search"
        showFocusBorder
      />
    );

    const secondaryMenuMarkup = (
      <TopBar.Menu
        activatorContent={
            <span>
          <Icon source={QuestionMarkMajorTwotone}/>
          <VisuallyHidden>Secondary menu</VisuallyHidden>
        </span>
        }
        open={isSecondaryMenuOpen}
        onOpen={toggleIsSecondaryMenuOpen}
        onClose={toggleIsSecondaryMenuOpen}
        actions={[
            {
                items: [{ content: 'Community forums' }],
            },
        ]}
      />
    );

    const topBarMarkup = (
      <TopBar
        showNavigationToggle
        userMenu={userMenuMarkup}
        secondaryMenu={secondaryMenuMarkup}
        searchResultsVisible={isSearchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        onSearchResultsDismiss={handleSearchResultsDismiss}
        onNavigationToggle={handleNavigationToggle}
      />
    );

    return (
      <Frame topBar={topBarMarkup}/>
    );
}

export default AppTopBar;
