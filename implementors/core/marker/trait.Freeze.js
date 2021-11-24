(function() {var implementors = {};
implementors["near_jsonrpc_client"] = [{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/auth/struct.AuthHeaderEntry.html\" title=\"struct near_jsonrpc_client::auth::AuthHeaderEntry\">AuthHeaderEntry</a>&lt;'a&gt;","synthetic":true,"types":["near_jsonrpc_client::auth::AuthHeaderEntry"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/auth/struct.Unauthenticated.html\" title=\"struct near_jsonrpc_client::auth::Unauthenticated\">Unauthenticated</a>","synthetic":true,"types":["near_jsonrpc_client::auth::Unauthenticated"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/auth/struct.Authenticated.html\" title=\"struct near_jsonrpc_client::auth::Authenticated\">Authenticated</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["near_jsonrpc_client::auth::Authenticated"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/auth/struct.ApiKey.html\" title=\"struct near_jsonrpc_client::auth::ApiKey\">ApiKey</a>","synthetic":true,"types":["near_jsonrpc_client::auth::ApiKey"]},{"text":"impl Freeze for <a class=\"enum\" href=\"near_jsonrpc_client/errors/enum.JsonRpcTransportSendError.html\" title=\"enum near_jsonrpc_client::errors::JsonRpcTransportSendError\">JsonRpcTransportSendError</a>","synthetic":true,"types":["near_jsonrpc_client::errors::JsonRpcTransportSendError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"near_jsonrpc_client/errors/enum.JsonRpcTransportHandlerResponseError.html\" title=\"enum near_jsonrpc_client::errors::JsonRpcTransportHandlerResponseError\">JsonRpcTransportHandlerResponseError</a>","synthetic":true,"types":["near_jsonrpc_client::errors::JsonRpcTransportHandlerResponseError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"near_jsonrpc_client/errors/enum.JsonRpcTransportRecvError.html\" title=\"enum near_jsonrpc_client::errors::JsonRpcTransportRecvError\">JsonRpcTransportRecvError</a>","synthetic":true,"types":["near_jsonrpc_client::errors::JsonRpcTransportRecvError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"near_jsonrpc_client/errors/enum.RpcTransportError.html\" title=\"enum near_jsonrpc_client::errors::RpcTransportError\">RpcTransportError</a>","synthetic":true,"types":["near_jsonrpc_client::errors::RpcTransportError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"near_jsonrpc_client/errors/enum.JsonRpcServerResponseStatusError.html\" title=\"enum near_jsonrpc_client::errors::JsonRpcServerResponseStatusError\">JsonRpcServerResponseStatusError</a>","synthetic":true,"types":["near_jsonrpc_client::errors::JsonRpcServerResponseStatusError"]},{"text":"impl&lt;E&gt; Freeze for <a class=\"enum\" href=\"near_jsonrpc_client/errors/enum.JsonRpcServerError.html\" title=\"enum near_jsonrpc_client::errors::JsonRpcServerError\">JsonRpcServerError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,&nbsp;</span>","synthetic":true,"types":["near_jsonrpc_client::errors::JsonRpcServerError"]},{"text":"impl&lt;E&gt; Freeze for <a class=\"enum\" href=\"near_jsonrpc_client/errors/enum.JsonRpcError.html\" title=\"enum near_jsonrpc_client::errors::JsonRpcError\">JsonRpcError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,&nbsp;</span>","synthetic":true,"types":["near_jsonrpc_client::errors::JsonRpcError"]},{"text":"impl&lt;T, E&gt; Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/struct.RpcAnyRequest.html\" title=\"struct near_jsonrpc_client::methods::RpcAnyRequest\">RpcAnyRequest</a>&lt;T, E&gt;","synthetic":true,"types":["near_jsonrpc_client::methods::any::RpcAnyRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/broadcast_tx_async/struct.RpcBroadcastTxAsyncRequest.html\" title=\"struct near_jsonrpc_client::methods::broadcast_tx_async::RpcBroadcastTxAsyncRequest\">RpcBroadcastTxAsyncRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::broadcast_tx_async::RpcBroadcastTxAsyncRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/broadcast_tx_commit/struct.RpcBroadcastTxCommitRequest.html\" title=\"struct near_jsonrpc_client::methods::broadcast_tx_commit::RpcBroadcastTxCommitRequest\">RpcBroadcastTxCommitRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::broadcast_tx_commit::RpcBroadcastTxCommitRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/health/struct.RpcHealthRequest.html\" title=\"struct near_jsonrpc_client::methods::health::RpcHealthRequest\">RpcHealthRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::health::RpcHealthRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/network_info/struct.RpcNetworkInfoRequest.html\" title=\"struct near_jsonrpc_client::methods::network_info::RpcNetworkInfoRequest\">RpcNetworkInfoRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::network_info::RpcNetworkInfoRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/status/struct.RpcStatusRequest.html\" title=\"struct near_jsonrpc_client::methods::status::RpcStatusRequest\">RpcStatusRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::status::RpcStatusRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/tx/struct.RpcTransactionStatusRequest.html\" title=\"struct near_jsonrpc_client::methods::tx::RpcTransactionStatusRequest\">RpcTransactionStatusRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::tx::RpcTransactionStatusRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/EXPERIMENTAL_broadcast_tx_sync/struct.RpcBroadcastTxSyncRequest.html\" title=\"struct near_jsonrpc_client::methods::EXPERIMENTAL_broadcast_tx_sync::RpcBroadcastTxSyncRequest\">RpcBroadcastTxSyncRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::EXPERIMENTAL_broadcast_tx_sync::RpcBroadcastTxSyncRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/EXPERIMENTAL_check_tx/struct.RpcCheckTxRequest.html\" title=\"struct near_jsonrpc_client::methods::EXPERIMENTAL_check_tx::RpcCheckTxRequest\">RpcCheckTxRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::EXPERIMENTAL_check_tx::RpcCheckTxRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/EXPERIMENTAL_genesis_config/struct.RpcGenesisConfigRequest.html\" title=\"struct near_jsonrpc_client::methods::EXPERIMENTAL_genesis_config::RpcGenesisConfigRequest\">RpcGenesisConfigRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::EXPERIMENTAL_genesis_config::RpcGenesisConfigRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/EXPERIMENTAL_tx_status/struct.RpcTransactionStatusRequest.html\" title=\"struct near_jsonrpc_client::methods::EXPERIMENTAL_tx_status::RpcTransactionStatusRequest\">RpcTransactionStatusRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::EXPERIMENTAL_tx_status::RpcTransactionStatusRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/adv_set_weight/struct.RpcAdversarialSetWeightRequest.html\" title=\"struct near_jsonrpc_client::methods::adv_set_weight::RpcAdversarialSetWeightRequest\">RpcAdversarialSetWeightRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::adv_set_weight::RpcAdversarialSetWeightRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/adv_disable_header_sync/struct.RpcAdversarialDisableHeaderSyncRequest.html\" title=\"struct near_jsonrpc_client::methods::adv_disable_header_sync::RpcAdversarialDisableHeaderSyncRequest\">RpcAdversarialDisableHeaderSyncRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::adv_disable_header_sync::RpcAdversarialDisableHeaderSyncRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/adv_disable_doomslug/struct.RpcAdversarialDisableDoomslugRequest.html\" title=\"struct near_jsonrpc_client::methods::adv_disable_doomslug::RpcAdversarialDisableDoomslugRequest\">RpcAdversarialDisableDoomslugRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::adv_disable_doomslug::RpcAdversarialDisableDoomslugRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/adv_produce_blocks/struct.RpcAdversarialProduceBlocksRequest.html\" title=\"struct near_jsonrpc_client::methods::adv_produce_blocks::RpcAdversarialProduceBlocksRequest\">RpcAdversarialProduceBlocksRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::adv_produce_blocks::RpcAdversarialProduceBlocksRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/adv_switch_to_height/struct.RpcAdversarialSwitchToHeightRequest.html\" title=\"struct near_jsonrpc_client::methods::adv_switch_to_height::RpcAdversarialSwitchToHeightRequest\">RpcAdversarialSwitchToHeightRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::adv_switch_to_height::RpcAdversarialSwitchToHeightRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/adv_get_saved_blocks/struct.RpcAdversarialGetSavedBlocksRequest.html\" title=\"struct near_jsonrpc_client::methods::adv_get_saved_blocks::RpcAdversarialGetSavedBlocksRequest\">RpcAdversarialGetSavedBlocksRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::adv_get_saved_blocks::RpcAdversarialGetSavedBlocksRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/adv_get_saved_blocks/struct.RpcAdversarialGetSavedBlocksResponse.html\" title=\"struct near_jsonrpc_client::methods::adv_get_saved_blocks::RpcAdversarialGetSavedBlocksResponse\">RpcAdversarialGetSavedBlocksResponse</a>","synthetic":true,"types":["near_jsonrpc_client::methods::adv_get_saved_blocks::RpcAdversarialGetSavedBlocksResponse"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/adv_check_store/struct.RpcAdversarialCheckStoreRequest.html\" title=\"struct near_jsonrpc_client::methods::adv_check_store::RpcAdversarialCheckStoreRequest\">RpcAdversarialCheckStoreRequest</a>","synthetic":true,"types":["near_jsonrpc_client::methods::adv_check_store::RpcAdversarialCheckStoreRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/methods/adv_check_store/struct.RpcAdversarialCheckStoreResponse.html\" title=\"struct near_jsonrpc_client::methods::adv_check_store::RpcAdversarialCheckStoreResponse\">RpcAdversarialCheckStoreResponse</a>","synthetic":true,"types":["near_jsonrpc_client::methods::adv_check_store::RpcAdversarialCheckStoreResponse"]},{"text":"impl Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/struct.JsonRpcClientConnector.html\" title=\"struct near_jsonrpc_client::JsonRpcClientConnector\">JsonRpcClientConnector</a>","synthetic":true,"types":["near_jsonrpc_client::JsonRpcClientConnector"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"near_jsonrpc_client/struct.JsonRpcClient.html\" title=\"struct near_jsonrpc_client::JsonRpcClient\">JsonRpcClient</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":["near_jsonrpc_client::JsonRpcClient"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()