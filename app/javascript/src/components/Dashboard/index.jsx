import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";
import urlsApi from "apis/urls";
import Container from "components/Container";
import PageLoader from "components/PageLoader";
import Table from "components/Tasks/Table/index";
import Input from "../Input";
import Button from "components/Button";

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  const fetchUrls = async () => {
    try {
      const response = await urlsApi.list();
      setUrls(response.data);
      setUrl("");
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const openLinkInNewTab = async (relativeUrl = "") => {
    try {
      const url = window.location.href + relativeUrl;
      window.open(url, "_blank").focus();
      await fetchUrls();
    } catch (error) {
      logger.error(error);
    }
  };

  const pinUrl = async (id, status) => {
    try {
      const toggledStatus = status === "pinned" ? "unpinned" : "pinned";
      await urlsApi.update({
        id,
        payload: { url: { status: toggledStatus } },
      });
      await fetchUrls();
    } catch (error) {
      logger.error(error);
    }
  };

  const submitUrl = async () => {
    try {
      await urlsApi.create({ url: { url } });

      await fetchUrls();
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Container>
      <div className="flex justify-around items-center mt-8 py-4 border-b">
        <Input value={url} placeholder="Enter URL" setUrl={setUrl} />
        <Button
          type="button"
          buttonText="Shortern!"
          loading={false}
          onClick={submitUrl}
        />

        <Button
          onClick={() => openLinkInNewTab("urls.csv")}
          type="button"
          buttonText="Reports"
          iconClass="ri-file-download-fill"
          loading={false}
        />
      </div>

      {either(isNil, isEmpty)(urls) ? (
        <h1 className="my-5 text-xl leading-5 text-center">No URLs</h1>
      ) : (
        <Table
          data={urls}
          pinUrl={pinUrl}
          openShortenedLink={openLinkInNewTab}
        />
      )}
    </Container>
  );
};

export default Dashboard;
